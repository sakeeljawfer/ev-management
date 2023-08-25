import React from 'react'
import EventItem from './event-item';
import classes from './event-list.module.css'

export default function EventList(props) {
    const { items } = props;
    return (
        <ul className={classes.list}>
            {items.map(ev => <EventItem
                key={ev.id}
                id={ev.id}
                title={ev.title}
                location={ev.location}
                date={ev.date}
                image={ev.image} />)}
        </ul>
    )
}
