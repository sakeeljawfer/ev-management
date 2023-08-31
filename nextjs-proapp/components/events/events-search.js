import React from 'react'
import Button from '../ui/button'
import Classes from '../events/events-search.module.css'

function EventsSearch() {
    return (
        <form className={Classes.form}>
            <div className={Classes.controls}>
                <div className={Classes.control}>
                    <label htmlFor='year'>Year</label>
                    <select id='year'>
                        <option value='2021'>2021</option>
                        <option value='2022'>2022</option>
                    </select>
                </div>
                <div className={Classes.control}>
                    <label htmlFor='month'>Month</label>
                    <select id='month' >
                        <option value='1'>January</option>
                        <option value='2'>February</option>
                        <option value='3'>March</option>
                        <option value='4'>April</option>
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    )
}

export default EventsSearch