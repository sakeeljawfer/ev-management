import Link from 'next/link'
import React from 'react'
import classes from './event-item.module.css'
import Button from '../ui/button'
import DateIcon from '../icons/date-icon'
import Location from '../icons/address-icon'
import Arrow from '../icons/arrow-right-icon'


export default function EventItem(props) {
    const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    const formatedAddress = location.replace(',', '\n');
    const exploreLink = '/events/${id}';
    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div>
                    <h2>{title}</h2>
                </div>
                <div className={classes.date}>
                    <DateIcon />
                    <time>{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <Location />
                    <address>{formatedAddress}</address>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}><Arrow /></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}
