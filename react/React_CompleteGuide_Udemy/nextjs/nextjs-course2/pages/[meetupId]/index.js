import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";


const MeetupDetails = (props) => {

    return(
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta 
                    name='description' 
                    content={props.meetupData.description}
                />
            </Head>
            <MeetupDetail
                image= {props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
        
    );
}

export const getStaticPaths = async () => {

    const client = await MongoClient.connect(
        'mongodb+srv://ahrektn:1234@cluster0.qpy5leo.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

    client.close();

    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({params: {meetupId: meetup._id.toString() },
        })),
    };
}

export const getStaticProps = async (context) => {
    // fetch data from an API

    const meetupId = context.params.meetupId;
    console.log(meetupId);

    const client = await MongoClient.connect(
        'mongodb+srv://ahrektn:1234@cluster0.qpy5leo.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId),
    });

    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            }
        },
        revalidate: 1
    };
};

export default MeetupDetails;