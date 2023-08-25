import { getFeaturedEvents } from '../dummy-data'
import EventList from '@/components/events/event-list';
export default function Home() {
  const feuturedEvents = getFeaturedEvents();
  return (
    <>
      <div>
        <EventList items={feuturedEvents} />
      </div>
    </>
  );
}
