import React from 'react'
import * as styles from '../styles/footer.module.css'
import {Link} from "gatsby";
import {AnchorLink} from "gatsby-plugin-anchor-links";

export default function Footer() {
    return (
        <footer>
            <div className={styles.main}>
                <ul className={styles.nav}>
                    <li><AnchorLink to={'#about'}>About</AnchorLink></li>
                    <li><AnchorLink to={'#tech'}>Tech</AnchorLink></li>
                    <li><AnchorLink to={'#work'}>Work</AnchorLink></li>
                    {/*<li><AnchorLink to={'#blog'}>Blog</AnchorLink></li>*/}
                    <li><AnchorLink to={'#contact'}>Contact</AnchorLink></li>
                </ul>
                <ul className={styles.socials}>
                            <li>
                                <a href="mailto:hello@pierregoaer.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/pierregoaer" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/pierregoaer" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M15.3499 5.5498C13.7681 5.5498 12.4786 6.81785 12.4504 8.39633L12.4223 9.97138C12.4164 10.3027 12.143 10.5665 11.8117 10.5606C11.7881 10.5602 11.7646 10.5584 11.7413 10.5552L10.1805 10.3423C8.12699 10.0623 6.15883 9.11711 4.27072 7.54387C3.67275 10.8535 4.84 13.147 7.65342 14.9157L9.40041 16.014C9.68095 16.1904 9.7654 16.5608 9.58903 16.8413C9.54861 16.9056 9.49636 16.9616 9.43504 17.0064L7.84338 18.1693C8.78973 18.2288 9.68938 18.1873 10.435 18.0385C15.1526 17.097 18.2897 13.5468 18.2897 7.69084C18.2897 7.21275 17.2774 5.5498 15.3499 5.5498ZM10.4507 8.36066C10.4983 5.69559 12.6735 3.5498 15.3499 3.5498C16.7132 3.5498 17.9465 4.10658 18.8348 5.00515C19.5462 4.9998 20.1514 5.17966 21.5035 4.35943C21.1693 5.9998 21.0034 6.71177 20.2897 7.69084C20.2897 15.3324 15.5926 19.0487 10.8264 19.9998C7.5587 20.6519 2.80646 19.5812 1.44531 18.1584C2.13874 18.1051 4.95928 17.8018 6.58895 16.6089C5.20994 15.6984 -0.278631 12.4679 3.32772 3.78617C5.02119 5.76283 6.73797 7.10831 8.47807 7.82262C9.63548 8.29774 9.91978 8.28825 10.4507 8.36066Z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/pierregoaer/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@pierregoaer" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
            </div>
            <div className={styles.copyrights}>
                © {new Date().getFullYear()} Pierre Goaer
            </div>
        </footer>
    )
}