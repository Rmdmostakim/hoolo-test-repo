import React from 'react';
import Classes from  './sellerapply.module.css';
import bg1 from './img/bg-1.svg';
import bg3 from './img/bg-3.svg';
import bg5 from './img/bg-5.svg';
import icon1 from './img/icon1.svg';
import icon2 from './img/icon2.svg';
import icon3 from './img/icon3.svg';
import icon4 from './img/icon4.svg';
import icon5 from './img/icon5.svg';
import icon6 from './img/icon6.svg';
import { Link } from 'react-router-dom';
import Faq from './Faq';

function SellerApply() {
    return (
        <div className={Classes.sectionContainer}>
            <div className={Classes.headingBox}>
                <div className={Classes.heading}>
                    <div className={Classes.headingText}>
                        <h2>Upload Videos and Boost Your Sales</h2>
                        <h4>Keep Your Customers Engaged</h4>
                    </div>
                    <div className={Classes.headingImage}>
                        <img src={bg1} alt="bg1"/>
                    </div>
                </div>
            </div>
            <div className={Classes.streamerBox}>
                <div className={Classes.stremerHeading}>
                    <div className={Classes.stremerIcon1}>
                        <img src={icon1} alt="icon1"/>
                    </div>
                    <div className={Classes.streamerText}>
                        <h2>Reach More Potential Shoppers</h2>
                        <h3>
                            <small>Stand out with unique content and garner followers to drive more sales</small>
                        </h3>
                    </div>
                    <div className={Classes.stremerIcon2}>
                        <img src={icon2} alt="icon2" />
                    </div>
                </div>
                <div className={Classes.streamerInfo}>
                    <div className={Classes.streamerInfoContainer}>
                        <div className={Classes.streamerInfoIcons}>
                            <img src={icon3} alt="icon3" /><span> No Monthly Fee</span>
                        </div>
                        <div className={Classes.streamerInfoIcons}>
                            <img src={icon4} alt="icon4" /><span> Easy Live Straming</span>
                        </div>
                        <div className={Classes.streamerInfoIcons}>
                            <img src={icon5} alt="icon5" /><span> Unlimited Product Upload</span>
                        </div>
                        <div className={Classes.streamerInfoIcons}>
                            <img src={icon6} alt="icon6" /><span> Amazing Store Profile</span>
                        </div>
                    </div>
                </div>
                <div style={{ clear:'both' }}></div>
                <div className={Classes.sellerAccount}>
                    <p>
                        Click below if your company uses the following
                        eCommerce Platform
                    </p>
                    <a href="/Sellerform">Apply for Seller</a>
                </div>
            </div>
            <div className={Classes.storeBox}>
                <div className={Classes.storeImage}>
                    <img src={bg3} alt="bg-3" />
                </div>
                <div className={Classes.storeInfo}>
                    <div className={Classes.storeInfoHeading}>
                        <h2>State-of-the-art Dashboard</h2>
                        <h4>
                            Uploading Products and Going Live Has Never Been Easier
                        </h4>
                    </div>
                    <div style={{ clear:'both' }}></div>
                    <div className={Classes.storeInfoBtns}>
                        <h4>Payment: Lowest Commision Per Sale</h4>
                    </div>
                </div>
            </div>
            <div style={{ clear:'both' }}></div>
            <div className={Classes.faqBox}>
                <h2>Frequently asked questions</h2>
                <div className={Classes.faq}>
                    <Faq question="Can I change my bank account details?">
                        You can change your bank details by filling out this form. It may take up to 24 hours for your updated bank details to be approved
                    </Faq>
                    <Faq question="How long will it take to verify my seller account?">
                        As a new seller, you must fill in all the information from your profile, and it will take 48 working hours for your information to be verified. If it's not by the scheduled time, please contact us via live chat.
                    </Faq>
                    <div style={{ clear:'both' }}></div>
                    <Faq question="How can I contact Hoolo?">
                        With Hoolo's Seller Support Team, you will receive all the information that you need as well as inquiries from sellers resolved as soon as possible.You may reach out to the Seller Support team via Call at <span><a style={{textDecoration: 'none',fontWeight:'bold'}} href="tel:01798776997">(+880) 179 877 6997</a></span>
                    </Faq>
                    <Faq question="How long does it take to approve a seller's application?">
                        Once you sign up and complete the to-do list, your application will be reviewed, verified, and approved within 48 hours. At each step, you will receive an email.
                        As soon as we receive your correct details, we can verify them to take you one step closer to selling on Hoolo! For further inquiries please contact our Seller Support Team.
                    </Faq>
                    <div style={{ clear:'both' }}></div>
                    <Faq question="How do I sign up to sell on Hoolo?">
                        Hoolo's step-by-step instructions for registering and selling can be found below. <br/>
                        <b>Step 1: </b>Click on this link and go to the initial registration form to send your request to sell on Hoolo. <br/>
                        <b>Step 2: </b>Fill out your profile information, which includes your address book, ID, and bank information. <br/>
                        <b>Step 3: </b>The seller support team will review and verify your information. In the meantime, you can begin listing your products on Seller Center. We will contact you within one business day if anything needs to be checked. Please note that your store won't be live until you have listed products.<br/>
                        <b>Step 4: </b>Request Hoolo packaging materials<br/>
                        <b>Step 5: </b>Once you receive the packaging, we will take your store live and you can start selling!<br/>
                    </Faq>
                    <Faq question="What is Hoolo's Policy towards counterfeit items?">
                        Hoolo has a Zero Tolerance Policy towards Counterfeit products. It is each seller’s responsibility to source and sell only authentic products and to immediately deactivate any product that is in violation of our guidelines: <br/>
                        Items that apply a trademark (e.g. a brand or character logo) on the product, the product packaging, or anywhere in relation with the product, without authorization by the trademark owner.<br/>
                        Items that contain specific design elements (e.g. cartoon characters or colorways) protected by a trademark, without the authorization by the trademark owner.<br/>
                        Items that bear such similarities with other products that they are likely to deceive buyers into thinking they are made or sold by the owner of the other product's brand (e.g. a replica of a branded item with or without altered logos).<br/>
                        Items that are in violation of any local country laws in which they are sold.
                        In case of any doubt we advise you to talk to the manufacturer and/or distributor of the products, and to your legal advisors. Hoolo will collaborate closely with brand owners, its customers and the authorities to prevent the sale of counterfeit items.
                    </Faq>
                    <div style={{ clear:'both' }}></div>
                    <Faq question="Is Hoolo concerned about counterfeit items?">
                        Hoolo has a Zero Tolerance Policy towards counterfeit products. It is the seller's responsibility to source and sell only authentic products and to deactivate any product that violates our guidelines:<br/>
                        Trademark applications (such as a brand or character logo) that appear on a product or its packaging without the trademark owner's permission.<br/>
                        Use of trademarked design elements (e.g. cartoon characters, colorways) without permission of the trademark owner.<br/>
                        Almost identical products are likely to deceive buyers into thinking they are made or sold by the brand's owner (e.g. replicas of branded items with or without altered logos).
                        It is illegal for a product to be sold in a country where it is illegal.<br/>
                        In case you have any doubts about the products, as well as the manufacturer and/or distributor, we recommend that you consult your legal advisors. By working closely with brand owners, customers, and authorities, the company prevents counterfeit goods from reaching the market.
                    </Faq>
                </div>
            </div>
            <div style={{ clear:'both' }}></div>
            <div className={Classes.meetBox}>
                <div className={Classes.meetInfo}>
                    <div className={Classes.meetBtn}>
                        <h2>
                            Would you like to schedule a meeting with us ?
                        </h2>
                        <Link to="/meeting">Schedule Meeting</Link>
                    </div>
                </div>
                <div className={Classes.meetImg}>
                    <img src={bg5} alt="bg-5" />
                </div>
            </div>
            <div style={{ clear:'both' }}></div>
        </div>
    );
}

export default SellerApply;
