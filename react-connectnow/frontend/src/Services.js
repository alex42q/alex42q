import React from 'react'
import "./Services.css"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InfoIcon from '@material-ui/icons/Info';

function Services() {
    return (
        <div className="services">
            <div className="services__container">
                <div className="services__row">
                    <div
                     className="services__column1">
                        <InfoIcon></InfoIcon>
                        <h2 className="services__h2">Who we are</h2>
                        <hr className="services__hr"></hr>
                        <p className="services__p">
                    Η Connect Now είναι μια νεοσύστατη Ελληνική εταιρεία η οποία εξειδικεύεται στην αποκατάστασης βλαβών 
                    internet και τηλεφωνίας. Με πολυετή εμπειρία στην αποκατάσταση βλαβών χαλκού , οπτικών ινών, ενσύρματων
                     (LAN) και ασύρματων (WiFi) δικτύων και έχοντας την άρτια τεχνογνωσία στον χώρο, ικανοποιεί τις ανάγκες 
                     όλων των πελατών της ,εταιρικούς και οικιακούς (ανεξάρτητα τον πάροχο) σε χρονικό διάστημα έως και λιγότερο 
                     των 24 ωρών απ' την στιγμή που θα ενημερωθούμε για την βλάβη. Στόχος μας η άμεση πρόσβαση και η σωστή χρήση 
                     του δικτύου όλων και πάνω από όλα, προς όφελος των πελατών μας. </p>
                    </div>
                    <div
                     className="services__column2">
                        <InfoIcon></InfoIcon>
                        <h2 className="services__h2">Who we are</h2>
                        <hr className="services__hr"></hr>
                        <p className="services__p">
                    Η Connect Now είναι μια νεοσύστατη Ελληνική εταιρεία η οποία εξειδικεύεται στην αποκατάστασης βλαβών 
                    internet και τηλεφωνίας. Με πολυετή εμπειρία στην αποκατάσταση βλαβών χαλκού , οπτικών ινών, ενσύρματων
                     (LAN) και ασύρματων (WiFi) δικτύων και έχοντας την άρτια τεχνογνωσία στον χώρο, ικανοποιεί τις ανάγκες 
                     όλων των πελατών της ,εταιρικούς και οικιακούς (ανεξάρτητα τον πάροχο) σε χρονικό διάστημα έως και λιγότερο 
                     των 24 ωρών απ' την στιγμή που θα ενημερωθούμε για την βλάβη. Στόχος μας η άμεση πρόσβαση και η σωστή χρήση 
                     του δικτύου όλων και πάνω από όλα, προς όφελος των πελατών μας. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
