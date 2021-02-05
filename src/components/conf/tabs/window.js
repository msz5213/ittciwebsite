import React from 'react';
import GoogleAd from '../../GoogleAd';
import windowsLogo from '../../../images/tabs/winLogo.png';
import link from '../../../utilities/links.json';

const window = () => {
    return(
        <div className='page-tab-body'>
             <section>
                <h3>Windows</h3>
            </section>
            <section className='tc'>
                <img className='win-logo' src={windowsLogo} alt='win Logo'/>
            </section>
            <section>
                <div>
                    <h4>Windows Screen Recorder:</h4>
                    <ul>
                        <a href={link.screencastify}><li><strong>Screencastify (Chrome Plugin) </strong></li></a>
                        <p>Free: 5 minute limit per recording | Ultimate($29): Unlimited recording </p>
                    </ul>
                </div>
                <div>
                    <h4>Windows Screen Recorder:</h4>
                    <ul>
                        <a href={link.screensy}><li><strong>Screensy (Chrome Plugin) </strong></li></a>
                        <p>Free: Unlimited recording </p>
                    </ul>
                </div>
                <div>
                    <h4>Download Software:</h4>
                    <ul>
                        <a href={link.DownloadSoftware}><li><strong>Screensy (Chrome Plugin) </strong></li></a>
                        <p>Free: Unlimited Software Downloading </p>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h4>MAC Screen, Audio & Video Recording:</h4>
                    <ul>
                        <li>Qick Time Player (Mac BuildIn Feature)</li>
                        <p>Free: Unlimited recording </p>
                    </ul>
                </div>
            </section>

           
            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default window;