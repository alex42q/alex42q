import React, { Component } from 'react'

import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CloudIcon from '@material-ui/icons/Cloud';
import PersonIcon from '@material-ui/icons/Person';
import Gr from "./Images/GR.png"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import navPhoto from "./Images/Combined Shape.png"
import navLogo from "./Images/Logo.png"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import greek from "./Images/greek.png"
import tree from "./Images/tree.png"
import img1 from "./Images/photo.png"
import img2 from "./Images/photo2.png"
import img3 from "./Images/photo3.png"
import img4 from "./Images/photo4.png"
import footerLogo from "./Images/logo2.png"
import fb from "./Images/fb.png"
import twitter from "./Images/twit.png"
import linkedin from "./Images/linkedin.png"
import instagram from "./Images/instagram.png"
import youtube from "./Images/youtube.png"
import pafWhite from "./Images/PAF white.png"
import axios from "axios"


export default class Index extends Component {
    constructor(props){
        super(props)

    let pa = document.getElementById("pa")
    axios.get("http://localhost:5000/home", { withCredentials:true })
    .then(res=>{
        console.log(res)
        if(res.data==="loggedin"){
            this.setState({showMail:res.data.user.email})
            this.props.history.push("/home")
            pa.textContent=res.data.user.email
        }else if(res.data==="notLoggedIn"){
            this.props.history.push('/login')
        }
    })
    .catch(err=>{
        console.log(err)
    })
    }
    render() {
        return (
            <div className="home">
            <div className="header">
                <div className="header__topNav">
                    <div className="header__topNavLeft">
                        <div className="header__topNavLeftIcon">
                            <QueryBuilderIcon
                                className="header__icon"
                             />
                        </div>
                        <div className="header__topNavLeftText">
                            <h3 className="header__h3">ΑΡΚΑΔΙΑ</h3>
                        </div>
                        <div className="header__topNavLeftIcon">
                        <CloudIcon 
                        className="header__icon"

                        />
                        </div>
                        <div className="header__topNavLeftText">
                            <h3 className="header__h3">ΚΑΤΑΙΓΙΔΑ</h3>
                        </div>
                    </div>
                    <div className="header__topNavRight">
                        <div className="header__topNavRightRegLog">
                            <div className="header__topNavRightIcon">
                            <PersonIcon className="header__icon" />
                            </div>
                            <div className="header__topNavRightTexts">
                                <ul className="header__ul">
                                    <li className="header__li"><a className="header__link" href="/register">Εγγραφή</a></li>
                                    <li className="header__li"><a className="header__link">/</a></li>
                                    <li className="header__li"><a className="header__link" href="/login">Σύνδεση</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="header__topNavRightFlag">
                            <div className="header__flagIcon">
                                <img src={Gr}></img>
                            </div>
                            <div className="header__downArrow">
                            <ArrowDownwardIcon className="header__icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__bottomNav">
                    <div className="header__bottomNavContainer">
                        <div className="header__bottomNavInsideImg">
                            <img className="header__bottomNavInsideImage" src={navLogo}></img>
                        </div>
                        <div className="header__bottomNavInsideNav">
                            <ul className="header__bottomNavUl">
                                <li className="header__bottomNavLi"><a className="header__bottomNavLink">Η ΟΜΟΝΣΠΟΝΔΙΑ</a></li>
                                <li className="header__bottomNavLi"><a className="header__bottomNavLink">ΑΡΚΑΔΩΝ ΕΡΓΑ</a></li>
                                <li className="header__bottomNavLi"><a className="header__bottomNavLink">ΕΠΩΝΥΜΟΙ ΑΡΚΑΔΕΣ</a></li>
                                <li className="header__bottomNavLi"><a className="header__bottomNavLink">ΝΕΑ-ΕΝΗΜΕΡΩΣΗ</a></li>
                                <li className="header__bottomNavLi"><a className="header__bottomNavLink">ΕΠΙΣΚΕΨΗ ΣΤΗΝ ΑΡΚΑΔΙΑ</a></li>
                                <li className="header__bottomNavLi"><a className="header__bottomNavLink">ΑΝΑΖΗΤΗΣΕΙΣ ΣΤΗΝ ΑΡΚΑΔΙΑ</a></li>
                                <li className="header__bottomNavLi"><a className="header__bottomNavLink"><MailOutlineIcon className="header__bottomIcon"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header__bottomText">
                    <h3 className="header__bottomH3">Pan-Arcadian Federation of America</h3>
                    <p className="header__bottomP">FOUNDED IN NEW YORK 1931</p>
                </div>
                <div className="header__circle">
                    <div className="header__circleTexts">
                        <div className="header__circleLogoAndText">
                            <img className="header__circleGreek" src={greek}></img>
                        </div>
                        <div className="header__circleHeadText">
                            <h4 className="header__circleH4">ΚΑΛΩΣ ΗΛΘΑΤΕ</h4>
                        </div>
                        <div className="header__middleTexts">
                            <h3 className="header__h4">Η αποστολή μας</h3>
                            <p className="header__p">Ο Παναρκαδικής Ομοσπονδίας Αμερικής είναι μια<br></br>
                             πανεθνική μη κερδοσκοπικού αδελφό <br></br>
                             ελληνικό-αμερικανική οργάνωση τα μέλη της οποίας <br></br>
                             κατεβαίνουν από την περιοχή της Αρκαδίας στην <br></br>
                             Πελοπόννησο, στη νότια Ελλάδα …</p>
                        </div>
                        <div className="header__middleButton">
                            <button className="header__middleBtn">ΠΕΡΙΣΣΟΤΕΡΑ</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="count">
                <div className="count__container">
                    <div className="count__topSide">
                        <div className="count__treeImage">
                            <img className="count__treeImg" src={tree}></img>
                        </div>
                        <div className="count__middleHeader">
                            <h2 className="count__h2">Μετριόμαστε, γιατί μετράμε!</h2>
                        </div>
                    </div>
                    <div className="count__bottomContainer">
                        <div className="count__leftSide">
                            <div className="count__leftSideHead">
                                <h3 className="count__leftSideH3">
                                Γενική απογραφή  των αποδήμων Αρκάδων στις ΗΠΑ και <br></br> 
                                επαναπατρισθέντων από τις ΗΠΑ
                                </h3>
                                <p className="count__leftSideP">
                                Η Παναρκαδική Ομοσπονδία Αμερικής πραγματοποιεί απογραφή <br></br> 
                                των Αρκάδων που διαμένουν και εργάζονται στις ΗΠΑ, (ανεξαρτήτως <br></br>
                                 υπηκότητας). 
                                </p>
                            </div>
                            <div className="count__leftSideBot">
                                <h3 className="count__leftSideBottomH3">
                                Το αποτύπωμα της Αρκαδικής γης μας συνδέει!
                                </h3>
                                <p className="count__leftSideBotP">
                                Όση χιλιομετρική απόσταση και αν μας χωρίζει, όσες γενιές και να <br></br> 
                                έχουμε...ψηλώσει πέρα απο τις ρίζες μας, η Αρκαδία, μας ενώνει!
                                </p>
                            </div>
                        </div>
                        <div className="count__rightSide">
                            <div className="count__rightSideHead">
                                <h3 className="count__rightSideH3">
                                Απογραφόμαστε...
                                </h3>
                                <p className="count__rightSideP">&rsaquo; Για να γνωρίσουμε ο ένας τον άλλο. </p>
                                <p className="count__rightSideP">&rsaquo; Για να αντλήσουμε δύναμη απο  τις ρίζες μας και την καταγωγή μας. </p>
                                <p className="count__rightSideP">&rsaquo; Για να είμαστε χρήσιμοι και να  παρεμβαίνουμε δημιουργικά για τις <br></br>ΗΠΑ την Ελλάδα και την Αρκαδία. </p>
                                <p className="count__rightSideP">&rsaquo; Για να υλοποιήσουμε τα σχέδια και τα οραματά μας.</p>
                                <p className="count__rightSideP">&rsaquo; Για να είμαστε ισχυροί.</p>                               
                            </div>
                        </div>
                    </div>
                    <div className="count__endingContainer">
                        <div className='count__endHead'>
                            <h3 className="count__endH3">ΤΕΛΕΤΗ ΕΝΑΡΞΗΣ</h3>
                        </div>
                        <div className="count__endMiddle">
                            <h2 className="count__endH2">Παρασκευή 20 Απριλίου 2108</h2>
                        </div>
                        <div className="count__endFooter">
                            <h3 className="count__endH3foot">ΝΕΑ ΥΟΡΚΗ</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="erga">
                    <div className="erga__header">
                        <div className="erga__logo">
                        <img src={greek}></img>
                        </div>
                        <div className="erga__text">
                                <h3 className="erga__h3">ΕΡΓΑ & ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ</h3>
                        </div>
                    </div>
                    <div className="erga__photosContainer">
                        <div className="erga__container">
                            <div className="erga__image">
                            <img src={img1}></img>
                            </div>
                            <div className="erga__imageTexts">
                                <h3 className="erga__imageH3">Γενικού Παναρκαδικό <br></br> Νοσοκομείο Τρίπολης</h3>
                                <p className="erga__imageP">Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolor.</p>
                            </div>
                            <div className="erga__imageLearn">
                                <h4 className="erga__imageH4"><span className="erga__span">&mdash;</span>ΠΕΡΙΣΣΟΤΕΡΑ</h4>
                            </div>
                        </div>

                        <div className="erga__container">
                        <div className="erga__image">
                            <img src={img2}></img>
                            </div>
                            <div className="erga__imageTexts">
                                <h3 className="erga__imageH3">Ο  παραδοσιακός οικισμός <br></br> του Λεωνιδίου</h3>
                                <p className="erga__imageP">Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolor.</p>
                            </div>
                            <div className="erga__imageLearn">
                                <h4 className="erga__imageH4"><span className="erga__span">&mdash;</span>ΠΕΡΙΣΣΟΤΕΡΑ</h4>
                            </div>
                            </div>

                            <div className="erga__container">
                            <div className="erga__image">
                            <img src={img3}></img>
                            </div>
                            <div className="erga__imageTexts">
                                <h3 className="erga__imageH3">Κυνουρία, Εκεί που <br></br> δεσπόζει ο Πάρνωνας</h3>
                                <p className="erga__imageP">Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolor.</p>
                            </div>
                            <div className="erga__imageLearn">
                                <h4 className="erga__imageH4"><span className="erga__span">&mdash;</span>ΠΕΡΙΣΣΟΤΕΡΑ</h4>
                            </div>
                            </div>

                            <div className="erga__container">
                            <div className="erga__image">
                            <img src={img4}></img>
                            </div>
                            <div className="erga__imageTexts">
                                <h3 className="erga__imageH3">Οι ελληνικές πόλεις με τα <br></br> καλύτερα πάρκα!</h3>
                                <p className="erga__imageP">Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolor.</p>
                            </div>
                            <div className="erga__imageLearn">
                                <h4 className="erga__imageH4"><span className="erga__span">&mdash;</span>ΠΕΡΙΣΣΟΤΕΡΑ</h4>
                            </div>
                            </div>
                    </div>
                    <div className="erga__button">
                        <button className="erga__btn">ΠΕΡΙΣΣΟΤΕΡΑ</button>
                    </div>
                </div>
                <div className="contact">
                    <div className='contact__container'>
                    <div className="contact__header">
                        <h2 className="contact__h2">ΕΠΙΚΟΙΝΩΝΙΑ</h2>
                    </div>
                    <hr className="contact__hr"></hr>
                        <div className="contact__form">
                        <form>
                        <div className="contact__FLname">
                        <div className="contact__label">
                        <label>Ονοματεπωνυμο</label>
                        </div>
                        <div className="contact__input">
                        <input className='contact__inp' type="text" name="firstlast"></input>
                        </div>
                        </div>

                        <div className="contact__phone">
                        <div className="contact__label">
                        <label>Τηλέφωνο</label>
                        </div>
                        <div className="contact__input">
                        <input className='contact__inp' type="tel" name="phone"></input>
                        </div>
                        </div>

                        <div className="contact__email">
                        <div className="contact__label">
                        <label>Email</label>
                        </div>
                        <div className="contact__input">
                        <input className='contact__inp' type="email" name="email"></input>
                        </div>
                        </div>

                        <div className="contact__message">
                        <div className="contact__label">
                        <label>Μήνυμα</label>
                        </div>
                        <div className="contact__input">
                        <textarea rows="10" cols="100"></textarea>
                        </div>
                        </div>
                        <hr className="contact__hr"></hr>
                        <div className="contact__button">
                            <button className="contact__btn">ΑΠΟΣΤΟΛΗ <span className="contact__symbol">&rsaquo;</span></button>
                        </div>
                        </form>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="footer__container">
                        <div className="footer__logoImage">
                            <img className="footer__logo" src={footerLogo}></img>
                        </div>
                        <div className="footer__texts">
                        <img src={pafWhite}></img>
                        </div>
                        <div className="footer__icons">
                            <img className="footer__img" src={fb}></img>
                            <img className="footer__img" src={twitter}></img>
                            <img className="footer__img" src={linkedin}></img>
                            <img className="footer__img" src={instagram}></img>
                            <img className="footer__img" src={youtube}></img>
                        </div>
                        <div className="footer__links">
                            <ul className="footer__ul">
                                <li className="footer__li"><a className="footer__link" href="">Η ΟΜΟΣΠΟΝΔΙΑ</a></li>
                                <li className="footer__li"><a className="footer__link" href="">ΑΡΚΑΔΩΝ ΕΡΓΑ</a></li>
                                <li className="footer__li"><a className="footer__link" href="">ΕΠΩΝΥΜΟΙ ΑΡΚΑΔΕΣ</a></li>
                                <li className="footer__li"><a className="footer__link" href="">ΝΕΑ - ΕΝΗΜΕΡΩΣΗ</a></li>
                                <li className="footer__li"><a className="footer__link" href="">ΕΠΙΣΚΕΨΗ ΣΤΗΝ ΑΡΚΑΔΙΑ</a></li>
                                <li className="footer__li"><a className="footer__link" href="">ΑΝΑΖΗΤΗΣΕΙΣ ΣΤΗΝ ΑΡΚΑΔΙΑ</a></li>
                                <li className="footer__li"><a className="footer__link" href="">ΕΠΙΚΟΙΝΩΝΙΑ</a></li>
                            </ul>
                        </div>
                        <div className="footer__copyrights">
                            <p className="footer__p">&#169;2018 Pan Arcadian Federation of America</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
