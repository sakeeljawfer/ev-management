import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list';
import { Fragment } from 'react';
import EventsSearch from '../../components/events/events-search'
export default function Events() {
  const events = getAllEvents();
  return (
    <>
      <Fragment>
        <EventsSearch />
        <EventList items={events} />
      </Fragment>

    </>
  );
}
