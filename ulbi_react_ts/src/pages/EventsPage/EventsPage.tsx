import React, {JSX} from "react";
import DragNDrop from "../../components/DragNDrop/DragNDrop";
import EventsExample from "../../components/EventsExample/EventsExample";
import InputReference from "../../components/InputReference/InputReference";

const EventsPage = (): JSX.Element => {
  return (
    <div>
      <h2>Events examples</h2>
      <DragNDrop />
      <EventsExample />
      <InputReference />
    </div>
  );
}
export default EventsPage;
