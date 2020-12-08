import React from 'react';
import { Grid, Cell } from 'react-mdl';
import GoogleAd from '../../../components/GoogleAd';
import courseOutline from '../../../images/CourseOutline.png';

const coursesAutomation = () => {
    return(
        <div className='page-tab-body'>
            <Grid className='page-tab-grid'>
                <Cell className='page-tab-first-col' col={12}>
                    <div className='resAutomation-'>
                        <h1>Software Quality Assurance Full Stack Course Outline</h1>
                        <img className='courseOutline' src={courseOutline} alt="Course Outline"></img>
                    </div>
                    <GoogleAd slot="1541085932" classNames="page-right-side" />
                </Cell>
            </Grid>
        </div>
    )
}
export default coursesAutomation;