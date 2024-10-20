import React from 'react';
import "./Event.css";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Event() {
    return (
        <div className="Event">
           <div className="event-head">
               <h4>Events</h4>
                <MoreHorizIcon className="event-icon" />
            </div> 
            <img src="https://i.ytimg.com/vi/UJwUxlX1phA/maxresdefault.jpg"/>
            <div className="event-mid">
                <h4>Recently Events</h4>
                <p>All</p>
            </div>
            <div className="event-item">
                <img src="https://graphicriver.img.customer.envatousercontent.com/files/250680742/Live-Concert_Square_Flyer_Template_PREVIEW.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=7e94f71166ba539070fb66c9f8786494" />
                <div className="event-item-detail">
                    <h4>Red Forever Live</h4>
                    <h5>10 December 2020</h5>
                </div>
            </div>
            <div className="event-item">
                <img src="https://i.pinimg.com/originals/17/c7/92/17c792c6f92daae9f3c64c3aab11344c.jpg" />
                <div className="event-item-detail">
                    <h4>Hispanic Heritage</h4>
                    <h5>8 November 2020</h5>
                </div>
            </div>
            <div className="event-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKWTrloVT4kyXsxCFViKBuWFxczrTUM-NHow&usqp=CAU" />
                <div className="event-item-detail">
                    <h4>Sarah Music Night</h4>
                    <h5>05 December 2021</h5>
                </div>
            </div>
            <div className="event-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsDaTHtlKJJFIbLZR37q7Q5901_TPSWkVkw&usqp=CAU" />
                <div className="event-item-detail">
                    <h4>REBIRTH</h4>
                    <h5>08 January 2021</h5>
                </div>
            </div>
        </div>
    )
}

export default Event
