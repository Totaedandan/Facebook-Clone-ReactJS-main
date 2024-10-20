import React from 'react';
import "./Messenger.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Messenger() {
    return (
        <div className="Messenger">
            <div className="mes-head">
                <h4>Messenger</h4>
                <p>All</p>
            </div>
            <div className="mes-profile">
                <img src="https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg" />
                <h5>Stephen Williams</h5>
                <FiberManualRecordIcon className="mes-active" />
            </div>
            <div className="mes-profile">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZE9HmrcAO7is81qOROvKo1s_9m2dT5DSOww&usqp=CAU" />
                <h5>James Chadwik</h5>
                <FiberManualRecordIcon className="mes-active" />
            </div>
            <div className="mes-profile">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwoLR2xYABn-UY01taj1-04EvqoDATHmdfA&usqp=CAU" />
                <h5>Peter Parker</h5>
                <FiberManualRecordIcon className="mes-inactive" />
            </div>
            <div className="mes-profile">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9wdGQ2Vt35yqc-7QvhQT-ARLTyVF7GUaFw&usqp=CAU" />
                <h5>Robert Patinson JR</h5>
                <FiberManualRecordIcon className="mes-inactive" />
            </div>
        </div>
    )
}

export default Messenger
