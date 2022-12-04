import React,{useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer-item.css';
import privacy from './resources/privacy.svg';
function Privacy() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
      },[]);
    return (
        <Container fluid>
            <div className='card privacy'>
            <div className='div-privacy'>
                <h3 className='head-txt'>Returns Policy</h3>
                <p className='p-txt'>
                ক্রয় করার জন্য আপনাকে ধন্যবাদ। আমরা আশা করি আপনি ক্রয় করে খুশি হয়েছেন। যাইহোক, কোনো কারণে যদি আপনার ক্রয়ের সাথে সম্পূর্ণরূপে সন্তুষ্ট না হন, আপনি এটি শুধুমাত্র পরিবর্তন এর জন্য আমাদের কাছে ফেরত দিতে পারেন। দয়া করে আরো তথ্যের জন্য নিচের আমাদের পরিবর্তন নীতি দেখুন।
                <br/><br/>
                যদি কোনো পণ্য ত্রুটিপূর্ণ বা ভুল পণ্য সরবরাহ করা হয়, তাহলে গ্রাহককে অবশ্যই ডেলিভারি ম্যানকে গ্রাহকের সামনে থাকা অবস্থায় জানাতে হবে। ডেলিভারি ম্যান জায়গা ছেড়ে চলে গেলে বৈধ কোনো কারণ ছাড়া কোনো অভিযোগ গ্রহণ করা হবে না। পরিবর্তনের জন্য পণ্য সরবরাহ করতে ৩-৫ কার্যদিবস লাগবে।
                পণ্য ডেলিভারি পাওয়ার ২৪ ঘন্টার মধ্যে পরিবর্তন এর জন্য অনুরোধ উত্থাপন করতে হবে।
                ফেরত শুধুমাত্র পন্য স্বল্পতার জন্য বাতিলকৃত অর্ডার এর জন্য প্রযোজ্য হবে।
                <br/><br/><b>পন্য ফেরত পাওয়ার বৈধ কারণ সমূহ</b><br/>
                ১.  বিতরণ করা পণ্য ক্ষতিগ্রস্ত (যেমন বাহ্যিক ধ্বংস বা ভাঙা) / ত্রুটিপূর্ণ হলে (যেমন স্যুইচ অন করতে অক্ষম)
                <br/>২. বিতরণ করা পণ্যটি অসম্পূর্ণ (যেমন পণ্যটি এবং/অথবা পণ্যটির আনুষাঙ্গিক অনুপস্থিত)
                <br/>৩.  বিতরণ করা পণ্যটি ভুল (যেমন ভুল পণ্য/আকার/রঙ, জাল পণ্য, বা মেয়াদোত্তীর্ণ)
                <br/>৪.  বিতরণ করা পণ্যটি পণ্যের বিবরণ বা ছবির সাথে যদি সামঞ্জস্যপূর্ণ না হয় । (অর্থাৎ পণ্যটি বিজ্ঞাপনে ব্যবহার করা পণ্যটির মত নয়)
                <br/>৫.  বিতরণ করা পণ্যটি যদি সঠিক মাপমত করা না হয়। (অর্থাৎপণ্যটির আকার সঠিক নয়)
                
                <br/><br/><b>বিভাগ অনুযায়ী রিটার্ন নীতি</b><br/>
                অনুগ্রহ করে মনে রাখবেন যে পণ্যের গায়ে অ-ফেরতযোগ্য হিসাবে চিহ্নিত করা হয়েছে, ঐসকল পণ্য ফেরতের জন্য যোগ্য নয়। আরও তথ্যের জন্য অ-ফেরতযোগ্য পণ্যগুলির সম্পূর্ণ তালিকা দেখুন।
                
                <br/><br/><b>ফোন এবং ট্যাবলেট সমূহ</b><br/>
                
                ফোন, ট্যাবলেট, ব্যাটারি ও চার্জার, ইয়ারফোন ও হেডসেট, মোবাইল ও ট্যাবলেট  সমূহের যন্ত্রাংশ রিটার্ন এবং রিফান্ডের জন্য মন পরিবর্তন প্রযোজ্য নয়।
                যদি প্রাপ্ত পণ্যটি ক্ষতিগ্রস্ত , ত্রুটিপূর্ণ, ভুল বা অসম্পূর্ণ হয়, Hoolo.live-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে।
                দ্রষ্টব্য: আমরা কোনো ব্যবহৃত পণ্যের জন্য রিটার্ন গ্রহণ করি না। মোবাইল ফোনের জন্য, আপনি Hoolo.live এর সাথে সরাসরি একটি ফেরত অনুরোধ করতে পারেন যদি ডিভাইসটি আগমনের সময় বন্ধ হয়ে যায় (অর্থাৎ সম্পূর্ণভাবে চালু না হলে)। যদি মোবাইল ফোনটি ইতিমধ্যেই সক্রিয় হয়ে থাকে*, তাহলে নির্মাতার ওয়ারেন্টি সংক্রান্ত তথ্যের জন্য অনুগ্রহ করে সরাসরি বিক্রেতা বা ব্র্যান্ড ওয়ারেন্টি প্রদানকারীর সাথে যোগাযোগ করুন।
                * একবার সিম কার্ড ঢোকানোর পরে বা ফোনটি ওয়াই-ফাই (Wi-Fi) এর মাধ্যমে ইন্টারনেটের সাথে সংযুক্ত হয়ে গেলে মোবাইল ফোন সক্রিয় বলে বিবেচিত হবে৷
                
                <br/><br/><b>ফ্যাশন</b><br/>
                বস্ত্র, পোশাক, সানগ্লাস, জুতা এবং আনুষঙ্গিক উপকরণ সমূহ
                প্রত্যাবর্তন এবং ফেরতের জন্য মনের পরিবর্তন প্রযোজ্য নহে 
                যদি প্রাপ্ত পণ্যটি ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল বা অসম্পূর্ণ হয়, Hoolo.live-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে। পণ্যগুলি অক্ষত ট্যাগ লাগানো সহ অবশ্যই পরিধান না করা অবস্থায়, না ধোয়া অবস্থায় এবং অপরিবর্তিত অবস্থায় থাকতে  হবে। ব্যহার করা যে কোনো পণ্য প্রত্যাখ্যান করা হবে এবং গ্রাহকদের কাছে ফিরিয়ে দেওয়া হবে।
                
                <br/><br/><b>ব্যাগ, চশমা, গহনা, ঘড়ি, মহিলাদের অন্তরঙ্গ পোশাক এবং পুরুষদের অন্তর্বাস।</b><br/>
                
                রিটার্ন এবং রিফান্ডের জন্য মনের পরিবর্তন প্রযোজ্য নয়।
                যদি প্রাপ্ত পণ্যটি ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল বা অসম্পূর্ণ হয়, হুলো.লাইভ (Hoolo.live)-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে। পণ্যগুলি অক্ষত ট্যাগ লাগানো সহ অবশ্যই পরিধান না করা অবস্থায়, না ধোয়া অবস্থায় এবং অপরিবর্তিত অবস্থায় থাকতে  হবে। ব্যহার করা যে কোনো পণ্য প্রত্যাখ্যান করা হবে এবং গ্রাহকদের কাছে ফিরিয়ে দেওয়া হবে।
                
               <br/><br/><b> সৌন্দর্য ও স্বাস্থ্য</b><br/>
                মেকআপ, সুগন্ধি, ময়েশ্চারাইজার, ক্রিম, স্ক্রাব, তেল, স্নান এবং শরীরে ব্যবহৃত আনুষাঙ্গিক পণ্য, ব্যক্তিগত যত্ন এবং স্বাস্থ্য, যৌন সুস্থতা, আকৃতি পরিধান, খাদ্য পরিপূরক
                রিটার্ন এবং রিফান্ডের জন্য মনের পরিবর্তন প্রযোজ্য নয়।
                যদি প্রাপ্ত পণ্যটি ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল বা অসম্পূর্ণ হয়, হুলো.লাইভ (Hoolo.live)-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে। 
                দ্রষ্টব্য: ব্যবহার বা রিটার্ন পলিসির মেয়াদ শেষ হওয়ার পরে ডিভাইস-সম্পর্কিত সমস্যার জন্য, আইটেমটি বিক্রেতা বা ব্র্যান্ড ওয়ারেন্টির আওতায় আছে কিনা তা অনুগ্রহ করে চেক করুন। বিভিন্ন ওয়ারেন্টির ধরন এবং বিক্রেতা/উৎপাদকের সাথে যোগাযোগ করার উপায় সম্পর্কে তথ্যের জন্য আমাদের ওয়ারেন্টি নীতি অনুসরণ করুন।
                যে পণ্যগগুলি ফেরতযোগ্য নয়: সমস্ত ধরণের সৌন্দর্য পরিষেবা।
                
                <br/><br/><b> যন্ত্রপাতি</b><br/>
                রিটার্ন এবং রিফান্ডের জন্য মনের পরিবর্তন প্রযোজ্য নয়।
                যদি প্রাপ্ত পণ্যটি ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল বা অসম্পূর্ণ হয়, হুলো.লাইভ (Hoolo.live)-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে। 
                দ্রষ্টব্য: ব্যবহার বা রিটার্ন পলিসির মেয়াদ শেষ হওয়ার পরে ডিভাইস-সম্পর্কিত সমস্যার জন্য, আইটেমটি বিক্রেতা বা ব্র্যান্ড ওয়ারেন্টির আওতায় আছে কিনা তা অনুগ্রহ করে চেক করুন। বিভিন্ন ওয়ারেন্টির ধরন এবং বিক্রেতা/উৎপাদকের সাথে যোগাযোগ করার উপায় সম্পর্কে তথ্যের জন্য আমাদের ওয়ারেন্টি নীতি অনুসরণ করুন।
                
                <br/><br/><b>কম্পিউটিং এবং গেমিং </b><br/>
                ল্যাপটপ, সার্টিফাইড রিফারবিশড ল্যাপটপ, কম্পোনেন্ট, প্রসেসর, প্রজেক্টর, স্টোরেজ, প্রিন্টার, স্ক্যানার, হেডফোন, স্পিকার, কনসোল এবং পিসি/ভিডিও গেমস, গেমিং কনসোল এবং যন্ত্রাংশসমূহ, সফটওয়্যার সিডি
                রিটার্ন এবং রিফান্ডের জন্য মনের পরিবর্তন প্রযোজ্য নয়।
                যদি প্রাপ্ত পণ্যটি ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল বা অসম্পূর্ণ হয়, হুলো.লাইভ (Hoolo.live)-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে। 
                দ্রষ্টব্য: আমরা কোনো ব্যবহৃত আইটেমের জন্য রিটার্ন গ্রহণ করি না। ব্র্যান্ড ওয়্যারেন্টি সহ ল্যাপটপের জন্য, হুলো.লাইভ (Hoolo.live) শুধুমাত্র রিটার্ন গ্রহণ করবে যদি ডিভাইসটি আগমনের সময় বন্ধ হয়ে যায় (অর্থাৎ সম্পূর্ণভাবে চালু না হয়)। ব্র্যান্ড সীল খোলা থাকলে বা সরিয়ে ফেললে, দয়াকরে নির্মাতার ওয়ারেন্টি সম্পর্কিত তথ্যের জন্য সরাসরি বিক্রেতা বা ব্র্যান্ড ওয়ারেন্টি প্রদানকারীর সাথে যোগাযোগ করুন।
                যে পণ্যগগুলি ফেরতযোগ্য নয়: সমস্ত সফ্টওয়্যার পণ্য যা তাদের পণ্যের গায়ে অ-ফেরতযোগ্য হিসাবে লেবেল লাগানো হয়েছে।
                দ্রষ্টব্য: যেকোন সফ্টওয়্যার-সম্পর্কিত প্রযুক্তিগত সমস্যা বা ইনস্টলেশন সমস্যার জন্য, নির্মাতার ওয়ারেন্টি সম্পর্কিত তথ্যের জন্য সরাসরি ব্র্যান্ড ওয়ারেন্টি প্রদানকারীর সাথে যোগাযোগ করুন।
                
                
                <br/><br/><b>টিভি, অডিও এবং ক্যামেরা </b><br/>
                টেলিভিশন, হেডফোন, স্পিকার, ক্যামেরা, ড্রোন, লেন্স, ফ্ল্যাশ, ফিল্টার মাইক্রোফোন, ভিডিও চশমা, রিমোট কন্ট্রোলার, বাদ্যযন্ত্র, অডিও এবং বিনোদনের সরঞ্জাম, পোর্টেবল প্লেয়ার, অন্যান্য যন্ত্রাংশ।
                রিটার্ন এবং রিফান্ডের জন্য মনের পরিবর্তন প্রযোজ্য নয়।
                যদি প্রাপ্ত পণ্যটি ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল বা অসম্পূর্ণ হয়, হুলো.লাইভ (Hoolo.live)-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে। 
                দ্রষ্টব্য: ব্যবহার বা রিটার্ন পলিসির মেয়াদ শেষ হওয়ার পরে ডিভাইস-সম্পর্কিত সমস্যার জন্য, আইটেমটি বিক্রেতা বা ব্র্যান্ড ওয়ারেন্টির আওতায় আছে কিনা তা অনুগ্রহ করে চেক করুন। বিভিন্ন ওয়ারেন্টির ধরন এবং বিক্রেতা/উৎপাদকের সাথে যোগাযোগ করার উপায় সম্পর্কে তথ্যের জন্য আমাদের ওয়ারেন্টি নীতি অনুসরণ করুন।
                যে পণ্যগগুলি ফেরতযোগ্য নয়: সিনেমা, টিভি সিরিজ এবং মিউজিক ভাউচার বা পরিষেবা
                
               <br/><br/><b> বাড়ি এবং বসবাস </b><br/>
                বিছানাপত্র ও স্নানপাত্র, আসবাবপত্র ও আলোকসজ্জা, রান্নাঘর ও ডাইনিং, বাড়ির সাজসজ্জা, বাড়ির উন্নতি, গৃহস্থালি ও বাড়ির স্টোরেজ সরবরাহ, বনভূমি ও বাগান, অন্যান্য আনুষাঙ্গিক
                রিটার্ন এবং রিফান্ডের জন্য মনের পরিবর্তন প্রযোজ্য নয়।
                যদি প্রাপ্ত পণ্যটি ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল বা অসম্পূর্ণ হয়, হুলো.লাইভ (Hoolo.live)-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে। 
                দ্রষ্টব্য: ব্যবহার বা রিটার্ন পলিসির মেয়াদ শেষ হওয়ার পরে ডিভাইস-সম্পর্কিত সমস্যার জন্য, আইটেমটি বিক্রেতা বা ব্র্যান্ড ওয়ারেন্টির আওতায় আছে কিনা তা অনুগ্রহ করে চেক করুন। বিভিন্ন ওয়ারেন্টির ধরন এবং বিক্রেতা/উৎপাদকের সাথে যোগাযোগ করার উপায় সম্পর্কে তথ্যের জন্য আমাদের ওয়ারেন্টি নীতি অনুসরণ করুন।
                যে পণ্যগগুলি ফেরতযোগ্য নয়: যে কোন প্রকার কাস্টম-মেড আইটেম।
                
                <br/><br/><b>খেলাধুলা ও ভ্রমণ </b><br/>
                বস্ত্র, পোশাক, জুতা এবং সানগ্লাস
                রিটার্ন এবং রিফান্ডের জন্য মনের পরিবর্তন প্রযোজ্য নয় 
                যদি প্রাপ্ত পণ্যটি ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল বা অসম্পূর্ণ হয়, হুলো.লাইভ (Hoolo.live)-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে। 
                বিদেশী পণ্যগুলির জন্য, প্রযোজ্য রিটার্নের কারণগুলি পরীক্ষা করতে অনুগ্রহ করে পণ্যের মোড়কটি অনুসরণ করুন।
                ব্যাগ ও লাগেজ, খেলার ঘড়ি, দল ও র‌্যাকেট খেলাধুলা, নৃত্য ও জিমন্যাস্টিকস, ব্যায়াম ও ফিটনেস, ক্রীড়া পুষ্টি ও পরিপূরক, আউটডোর সরঞ্জাম, ফিটনেস এবং অন্যান্য ক্রীড়া সরঞ্জাম
                রিটার্ন এবং রিফান্ডের জন্য মনের পরিবর্তন প্রযোজ্য নয়।
                যদি প্রাপ্ত পণ্যটি ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল বা অসম্পূর্ণ হয়, হুলো.লাইভ (Hoolo.live)-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে। 
                বিদেশী পণ্যগুলির জন্য, প্রযোজ্য রিটার্নের কারণগুলি পরীক্ষা করতে অনুগ্রহ করে পণ্যের মোড়কটি দেখুন।
                দ্রষ্টব্য: ব্যবহার বা রিটার্ন পলিসির মেয়াদ শেষ হওয়ার পরে ডিভাইস-সম্পর্কিত সমস্যার জন্য, আইটেমটি বিক্রেতা বা ব্র্যান্ড ওয়ারেন্টির আওতায় আছে কিনা তা অনুগ্রহ করে চেক করুন। বিভিন্ন ওয়ারেন্টির ধরন এবং বিক্রেতা/উৎপাদকের সাথে যোগাযোগ করার উপায় সম্পর্কে তথ্যের জন্য আমাদের ওয়ারেন্টি নীতি অনুসরণ করুন।
                
                <br/><br/><b>শিশু, খেলনা এবং বাচ্চাদের </b><br/>
                বস্ত্র , পোশাক, সানগ্লাস, জুতা এবং আনুষাঙ্গিক
                রিটার্ন এবং রিফান্ডের জন্য মনের পরিবর্তন প্রযোজ্য (বিদেশ থেকে পাঠানো নন-Hoolo.liveMall আইটেম ব্যতীত)।
                যদি প্রাপ্ত পণ্যটি ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল বা অসম্পূর্ণ হয়, হুলো.লাইভ (Hoolo.live)-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে। 
                খেলনা ও গেমস, শিশুর যত্ন ও স্বাস্থ্যবিধি, শিশুর গিয়ার, ডায়াপার ও পোটিস, খাওয়ানো এবং নার্সিং
                রিটার্ন এবং রিফান্ডের জন্য মনের পরিবর্তন প্রযোজ্য নয়।
                যদি প্রাপ্ত পণ্যটি ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল বা অসম্পূর্ণ হয়, হুলো.লাইভ (Hoolo.live)-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে। 
                দ্রষ্টব্য: ব্যবহার বা রিটার্ন পলিসির মেয়াদ শেষ হওয়ার পরে ডিভাইস-সম্পর্কিত সমস্যার জন্য, আইটেমটি বিক্রেতা বা ব্র্যান্ড ওয়ারেন্টির আওতায় আছে কিনা তা অনুগ্রহ করে চেক করুন। বিভিন্ন ওয়ারেন্টির ধরন এবং বিক্রেতা/উৎপাদকের সাথে যোগাযোগ করার উপায় সম্পর্কে তথ্যের জন্য আমাদের ওয়ারেন্টি নীতি অনুসরণ করুন।
                
                <br/><br/><b>মুদির দোকান </b><br/>
                বেকারি, পানীয়, বেকিং এবং রান্না, সিগার এবং সিগারেট, দুগ্ধ, প্যাকেটজাত খাবার, পার্টি আনুষাঙ্গিক, স্ন্যাকস, মাংস এবং সামুদ্রিক খাবার, ফল এবং সবজি
                রিটার্ন এবং রিফান্ডের জন্য মনের পরিবর্তন প্রযোজ্য নয়।
                প্রাপ্ত পণ্যটির মেয়াদ শেষ হয়ে গেলে, ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল, বা অসম্পূর্ণ হলে, হুলো.লাইভ (Hoolo.live)-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে।
                
                <br/><br/><b>ডিজিটাল পণ্য </b><br/>
                অ-ফেরতযোগ্য
                
                <br/><br/><b>অন্যান্য বিভাগ </b><br/>
                <br/><br/><b>বই এবং স্টেশনারি </b><br/>
                রিটার্ন এবং রিফান্ডের জন্য মনের পরিবর্তন প্রযোজ্য নয়।
                যদি প্রাপ্ত পণ্যটি ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল বা অসম্পূর্ণ হয়, হুলো.লাইভ (Hoolo.live)-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে। 
                রিটার্ন এবং রিফান্ডের জন্য মনের পরিবর্তন প্রযোজ্য নয়।
                যদি প্রাপ্ত পণ্যটির মেয়াদ শেষ হয়ে গেলে, ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল, বা অসম্পূর্ণ হলে, হুলো.লাইভ (Hoolo.live)-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে।
                <br/><br/><b>মোটরগাড়ি এবং মোটরসাইকেল আনুষাঙ্গিক এবং অন্যান্য </b><br/>
                রিটার্ন এবং রিফান্ডের জন্য মনের পরিবর্তন প্রযোজ্য নয়।
                যদি প্রাপ্ত পণ্যটি ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল বা অসম্পূর্ণ হয়, হুলো.লাইভ (Hoolo.live)-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে। 
                যে পণ্যগগুলি ফেরতযোগ্য নয়: যে কোনও ধরণের যানবাহন (গাড়ি, বাইক ইত্যাদি), ইনস্টলেশন পরিষেবা
                <br/><br/><b>চিকিৎসা ও শিল্প সরঞ্জাম </b><br/>
                রিটার্ন এবং রিফান্ডের জন্য মনের পরিবর্তন প্রযোজ্য নয়।
                যদি প্রাপ্ত পণ্যটি ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল বা অসম্পূর্ণ হয়, হুলো.লাইভ (Hoolo.live)-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে।
                টুল, ডাই এবং আউটডোর<br/><br/><b> </b><br/>
                রিটার্ন এবং রিফান্ডের জন্য মনের পরিবর্তন প্রযোজ্য নয়।
                যদি প্রাপ্ত পণ্যটি ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল বা অসম্পূর্ণ হয়, হুলো.লাইভ (Hoolo.live)-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে।
                <br/><br/><b>লন্ড্রি এবং পরিষ্কার করা </b><br/>
                রিটার্ন এবং রিফান্ডের জন্য মনের পরিবর্তন প্রযোজ্য নয়।
                যদি প্রাপ্ত পণ্যটি ক্ষতিগ্রস্ত, ত্রুটিপূর্ণ, ভুল বা অসম্পূর্ণ হয়, হুলো.লাইভ (Hoolo.live)-এর মূল্যায়নের উপর ভিত্তি করে একটি রিফান্ড প্রদান করা হবে।
                
                <br/><br/><b>ফেরতের জন্য শর্তসমূহ </b><br/>
                ১. পণ্যটি অবশ্যই অব্যবহৃত, পরিধানহীন, ধোয়াহীন এবং কোনো ত্রুটি ছাড়া হতে হবে। ফ্যাশন পণ্যের জন্য, পণ্যগুলি ফিট হয় কিনা তা দেখার জন্য চেষ্টা করা যেতে পারে। এটি এখনও অব্যবহৃত হিসাবে বিবেচিত হবে।
                <br/>২. পণ্যটিতে অবশ্যই মূল ট্যাগ, ব্যবহারকারীর ম্যানুয়াল, ওয়ারেন্টি কার্ড, ফ্রিবি, চালান এবং আনুষাঙ্গিক অন্তর্ভুক্ত থাকতে হবে।
                <br/>৩. পণ্যটি অবশ্যই আসল এবং অক্ষত প্রস্তুতকারকের প্যাকেজিং/বক্সে ফেরত দিতে হবে। পণ্যটি Hoolo.live প্যাকেজিং/বক্সে প্রদান করা হলে, একই প্যাকেজিং/বক্স ফেরত দিতে হবে। প্রস্তুতকারকের প্যাকেজিং/বাক্সে সরাসরি টেপ বা স্টিকার লাগাবেন না।
                <br/>দ্রষ্টব্য: আপনার রিটার্ন প্রক্রিয়াটি কোনো প্রকার অসুবিধা/বিলম্ব এড়াতে আপনার রিটার্ন প্যাকেজে দেওয়া অর্ডার নাম্বার এবং রিটার্ন ট্র্যাকিং নাম্বার দেখানো খুবই গুরুত্বপূর্ণ।
                ড্রপ-অফ স্টেশন/ পিকআপ এজেন্টের কাছে আপনার প্যাকেজ হস্তান্তর করার সময়, অনুগ্রহ করে হুলো.লাইভ (Hoolo.live) রিটার্ন প্রাপ্তিস্বীকার পত্র সংগ্রহ করুন এবং ভবিষ্যতে রেফারেন্সের জন্য এটি সংরক্ষণ করুন।
                যদি আপনার ফেরত আইটেম উপরোক্ত প্রয়োজনীয়তা পূরণ না করে, তবে আমরা একটি রিফান্ডের জন্য যেকোনো অনুরোধ প্রত্যাখ্যান করার অধিকার সংরক্ষণ করি।
                
                
                
                
                
                <br/><br/><b>পরিবর্তন প্রক্রিয়া </b><br/>
                একটি পণ্য ফেরত দিতে, একটি রিটার্ন মার্চেন্ডাইজ অথরাইজেশন (RMA) নম্বর পেতে support@hoolo.live-এ গ্রাহক পরিষেবা ইমেল করুন। একটি RMA নম্বর পাওয়ার পরে, পণ্যটিকে নিরাপদে তার আসল প্যাকেজিংয়ে রাখুন এবং আপনার ক্রয়ের প্রমাণপত্র অন্তর্ভুক্ত করুন। আমাদের ডেলিভারি ম্যান পরিবর্তন অনুরোধের তারিখ থেকে 3-5 কার্যদিবসের মধ্যে গ্রাহকের ঠিকানা থেকে প্যাকেজটি তুলে নেবেন।
                <br/><br/><b>রিফান্ড প্রদান </b><br/>
                <p>
                রিফান্ডের ধরন এবং আপনার ব্যবহার করা অর্থপ্রদানের পদ্ধতির উপর নির্ভর করে আপনার রিফান্ডের প্রক্রিয়াকরণের সময় নির্ধারিত হবে।  

                <br/>ফেরতের সময়কাল/প্রক্রিয়া শুরু হবে তখন যখন হুলু আপনার রিফান্ডের ধরন অনুযায়ী আপনার রিফান্ড প্রক্রিয়া করবে।  

                <br/>আপনার রিফান্ড পণ্যের জন্য ডেলিভারি চার্জ কর্তন করে রিফান্ডের মুল্য পরিশোধ করা হবে।
                </p>
                <br/><br/><b>রিফান্ডের ধরন </b><br/>
                <p>
                হুলু নিম্নলিখিত রিফান্ডের ধরন অনুযায়ী আপনার রিফান্ড প্রক্রিয়া করবে 

                <br/>১। রিটার্ন থেকে রিফান্ড – আপনার পণ্য HQ-এ রিফান্ড গেলে রিটার্ন প্রক্রিয়া করা হয় এবং QC সম্পন্ন হয় (সফলভাবে)। একটি পণ্য কিভাবে ফেরত দিতে হয় তা জানতে, বিভাগ অনুযায়ী আমাদের রিটার্ন নীতি পড়ুন। 

                <br/>২। বাতিল অর্ডার থেকে রিফান্ড - বাতিলকরণ সফলভাবে সম্পন্ন হলে, একটি রিফান্ড প্রক্রিয়া স্বয়ংক্রিয়ভাবে শুরু হয়। 

                <br/>৩। অকৃতকার্য/ফেইল্ড ডেলিবারি থেকে রিফান্ড - আইটেমটি বিক্রেতার কাছে পৌঁছে গেলে রিফান্ড প্রক্রিয়া শুরু হয়। দয়া করে মনে রাখবেন যে এটি আপনার ডেলিভারি ঠিকানার এলাকার উপর নির্ভর করে আরও সময় নিতে পারে। 
                </p>
                <table class="table table-bordered">
                    <thead>
                    <tr>
                    <th>
                    মূল্যপরিশোধ পদ্ধতি 
                    </th>
                    <th>
                    রিফান্ড অপশন  
                    </th>
                    <th>
                    রিফান্ডের সময়   
                    </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>ডেবিট বা ক্রেডিট কার্ড </td>
                    <td>ডেবিট বা ক্রেডিট কার্ড পেমেন্ট পরিবর্তন </td>
                    <td>১০ কার্যদিবস</td>
                    </tr>
                    <tr>
                    <td>এমএফএস </td>
                    <td>MFS </td>
                    <td>৮ কার্যদিবস </td>
                    </tr>
                    <tr>
                    <td>ক্যাশ অন ডেলিভারি (COD) </td>
                    <td>ব্যাংক আমানত / এমএফএস </td>
                    <td>৫ কার্যদিবস </td>
                    </tr>
                    </tbody>
                    </table>
                <br/><b>বিশেষ দ্রষ্টব্য: </b><p>সর্বাধিক রিফান্ড টাইমলাইন সপ্তাহান্তে এবং সরকারী ছুটির দিনগুলি বাদ দেয়৷ </p>
                
                
                <br/><br/><b>ব্যতিক্রম </b><br/>
                নিম্নলিখিত পণ্য পরিবর্তন করা যাবে না:
                কাস্টমাইজড বা তৈরি করা পণ্য অর্ডার
                ত্রুটিপূর্ণ বা ক্ষতিগ্রস্ত পণ্যের জন্য, একটি ফেরত বা বিনিময় ব্যবস্থা করার জন্য নীচের দেওয়া ঠিকানায় যোগাযোগ করুন।
                
                <br/><br/><b>বিশেষ দ্রষ্টব্যঃ </b><br/>
                বিক্রয়কৃত পণ্য চূড়ান্ত বিক্রয় এবং ফেরত দেওয়া যাবে না। 
                <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>
                        ফেরত পদ্ধতি 
                        </th>
                        <th>
                        বর্ণনা
                        </th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>ব্যাংক আমানত </td>
                        <td>প্রদত্ত ব্যাঙ্ক অ্যাকাউন্টের বিবরণ অবশ্যই সঠিক হতে হবে। অ্যাকাউন্টটি সক্রিয় হতে হবে এবং কিছু ব্যালেন্স রাখতে হবে. </td>
                    </tr>
                    <tr>
                        <td>ডেবিট বা ক্রেডিট কার্ড </td>
                        <td>হুলো আপনাকে অবহিত করেছে যে আপনার ব্যক্তিগত ব্যাঙ্কের সাথে যোগাযোগ করুন যদি রিফান্ড দেওয়া টাকা রিফান্ড সম্পূর্ণ হওয়ার পরে আপনার কার্ডের বিবৃতিতে প্রদর্শিত না হয়। </td>
                    </tr>
                    <tr>
                        <td>এমএফএস / রকেট মোবাইল ওয়ালেট </td>
                        <td>ব্যাঙ্ক ডিপোজিটের মতোই, টাকা ফেরত দেওয়া হবে একই মোবাইল অ্যাকাউন্টের বিবরণে যা আপনি পেমেন্টের সময় দিয়েছিলেন। </td>
                    </tr>
                </tbody>
            </table>
                <br/><br/><b>প্রশ্ন </b><br/>
                আমাদের রিটার্ন নীতির বিষয়ে আপনার কোন প্রশ্ন থাকলে, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন:
                +8801798776997, support@hoolo.live। 
                </p>
               <p className='p-txt'>
               <br/><br/><b>RETURN and Refund Policy </b><br/>
                    Last updated April 27, 2022<br/><br/>
                    Thank you for your purchase. We hope you are happy with your purchase. However, if you are not completely satisfied with your purchase for any reason, you may return it to us for an exchange only. Please see below for more information on our return policy.
                    If a product is faulty or wrong product is delivered, then the customer must inform the delivery man while he is in front of the customer. No complain will be accepted without the valid reasons to return once the delivery man left the place. It will take 3-5 working days to deliver the product upon change.
                    Replacement request must be raised within 24 hours after getting the delivery.
                    Refund is only applicable to the canceled order items due to product unavailability.

                    <br/><br/><b>Valid reasons to return an item </b><br/>
                    1. Delivered product is damaged (i.e., physically destroyed or broken) / defective (e.g. unable to switch on)
                    <br/>2. Delivered product is incomplete (i.e., has missing items and/or accessories)
                    <br/>3. Delivered product is incorrect (i.e. wrong product/size/color, fake item, or expired)
                    <br/>4. Delivered product is does not match product description or picture (i.e product not as advertised)
                    <br/>5. Delivered product does not fit. (i.e. size is unsuitable)


                   <br/><br/><b> Returns Policy per Category </b><br/>
                    Please note that certain items marked as non-returnable on product page are not eligible for return. For more information view the complete list of non-returnable items.
                    Phones and Tablets<br/><br/><b> </b><br/>
                    Phones, Tablets, Batteries & Chargers, Earphones & Headsets, Mobile & Tablet Accessories Change of Mind is not applicable for return and refund. If the item received is damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment. Note: We do not accept returns for any used items. For mobile phones, you may raise a return request directly with Hoolo.live if the device is dead on arrival (i.e. does not switch on completely). If the mobile phone has already been activated*, please contact the seller or brand warranty provider directly for information regarding the manufacturer's warranty. *Mobile phone is considered activated once SIM card has been inserted or when the phone has been connected to the internet via Wi-Fi.

                    <br/><br/><b>Fashion </b><br/>
                    Clothing, Apparel, Sunglasses, Shoes & Accessories Change of mind is not applicable for return and refund (including Hoolo.live- items shipped from overseas) If the item received is damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment. Items must be unworn, unwashed, and unaltered with their tags intact. Any items found used will be rejected and returned to customers. Bags, Eyewear, Jewellery, Watches, Women's Intimate Apparel & Men's Innerwear. Change of mind is not applicable for return and refund. If the item received is damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment. Items must be unworn, unwashed, and unaltered with their tags intact. Any items found used will be rejected and returned to customers. Items that are non-returnable: All custom-made items, Fine Jewellery (gold, diamonds, gems etc.)

                    <br/><br/><b>Beauty & Health </b><br/>
                    Makeup, Fragnance, Moisturizers, Creams, Scrubs, Oils, Bath & Body Accessories, Personal Care & Health, Sexual Wellness, Shape wear, Food Supplements Change of mind is not applicable for return and refund. If the item received is damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment. Note: For device-related issues after usage or expiration of return policy period, please check if the item is covered under Seller or Brand Warranty. Refer to our Warranty Policy for information on the different warranty types and ways to contact the seller/manufacturer. Items that are non-returnable: All types of Beauty Services

                    <br/><br/><b>Appliances </b><br/>
                    Change of mind is not applicable for return and refund. If the item received is damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment. Note: For device-related issues after usage or expiration of return policy period, please check if the item is covered under Seller or Brand Warranty. Refer to our Warranty Policy for information on the different warranty types and ways to contact the seller/manufacturer.

                    <br/><br/><b>Computing & Gaming </b><br/>
                    Laptops, Certified Refurbished Laptops, Components, Processors, Projectors, Storage, Printers, Scanners, Headphones, Speakers, Consoles & PC  Video Games, Gaming Consoles & Accessories, Software CDs Change of mind is not applicable for return and refund. If the item received is damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment. Note: We do not accept returns for any used items. For laptops with brand warranty, Hoolo.live will only accept returns if the device is dead on arrival (i.e. does not switch on completely). Once the brand seal has been opened or removed, please contact the seller or brand warranty provider directly for information regarding the manufacturer's warranty. Items that are non-returnable: All software products that are labeled as non-returnable on their product details page Note: For any software-related technical issues or installation issues, please contact the brand warranty provider directly for information regarding the manufacturer's warranty.

                    <br/><br/><b>TVs, Audios & Cameras </b><br/>
                    Televisions, Headphones, Speakers, Cameras, Drones, Lenses, Flashes, Filters Microphones,Video Glasses, Remote Controllers, Musical Instruments, Audio & Entertainment Equipments, Portable Players, Other Accessories Change of mind is not applicable for return and refund. If the item received is damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment. Note: For device-related issues after usage or expiration of return policy period, please check if the item is covered under Seller or Brand Warranty. Refer to our Warranty Policy for information on the different warranty types and ways to contact the seller/manufacturer. Items that are non-returnable: Movies, TV Series & Music voucher or services

                    <br/><br/><b>Home & Living </b><br/>
                    Bedding & Bath, Furniture & Lighting, Kitchen & Dining, Home Décor, Home Improvements, Household & Home Storage Supplies, Lawn & Garden,Other Accessories Change of mind is not applicable for return and refund. If the item received is damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment. Note: For device-related issues after usage or expiration of return policy period, please check if the item is covered under Seller or Brand Warranty. Refer to our Warranty Policy for information on the different warranty types and ways to contact the seller/manufacturer. Items that are non-returnable: Any custom-made items

                    <br/><br/><b>Sports & Travel </b><br/>
                    Clothing, Apparel, Shoes & Sunglasses Change of mind is not applicable for return and refund (including Hoolo.live- items shipped from overseas). If the item received is damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment.
                    <br/><br/>
                    For overseas products, please refer to the product page to check the applicable return reasons.
                    Bags & Luggage, Sport Watches, Team & Racket Sports, Dance & Gymnastics, Exercise & Fitness, Sports Nutrition & Supplements, Outdoor Equipment, Fitness & Other Sports Equipment Change of mind is not applicable for return and refund. If the item received is damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment. For overseas products, please refer to the product page to check the applicable return reasons. Note: For device-related issues after usage or expiration of return policy period, please check if the item is covered under Seller or Brand Warranty. Refer to our Warranty Policy for information on the different warranty types and ways to contact the seller/manufacturer.
                    
                    <br/><br/><b>Baby, Toys & Kids </b><br/>
                    Clothing, Apparel, Sunglasses, Shoes & Accessories Change of mind is not applicable for return and refund (including Hoolo.live- items shipped from overseas). If the item received is damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment. Toys & Games, Baby Care & Hygiene, Baby Gear, Diapers & Potties, Feeding & Nursing Change of mind is not applicable for return and refund. If the item received is damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment. Note: For device-related issues after usage or expiration of return policy period, please check if the item is covered under Seller or Brand Warranty. Refer to our Warranty Policy for information on the different warranty types and ways to contact the seller/manufacturer.

                    <br/><br/><b>Grocer's Shop </b><br/>
                    Bakery, Beverages, Baking & Cooking, Cigars & Cigarettes, Dairy, Packaged Foods, Party Accessories, Snacks, Meat & Seafood, Fruits & Vegetables Change of mind is not applicable for return and refund. If the item received is expired, damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment.

                    <br/><br/><b>Digital Goods </b><br/>
                    Non-returnable

                    <br/><br/><b>Other Categories </b><br/>
                    <br/><br/><b>Books & Stationery </b><br/>
                    Change of mind is not applicable for return and refund. If the item received is damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment.

                    <br/><br/><b>Pet Supplies </b><br/>
                    Change of mind is not applicable for return and refund. If the item received is expired, damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment.

                    <br/><br/><b>Automotive & Motorcycles Accessories and Others </b><br/>
                    Change of mind is not applicable for return and refund. If the item received is damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment. Items that are non-returnable: Any types of vehicles (cars, bikes etc.), Installation Services

                    <br/><br/><b>Medical & Industrial Equipment </b><br/>
                    Change of mind is not applicable for return and refund. If the item received is damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment.

                    <br/><br/><b>Tools, DIY & Outdoor </b><br/>
                    Change of mind is not applicable for return and refund. If the item received is damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment.

                    <br/><br/><b>Laundry & Cleaning </b><br/>
                    Laundry & Cleaning Change of mind is not applicable for return and refund. If the item received is damaged, defective, incorrect, or incomplete, a refund will be issued based on Hoolo.live's assessment.

                    <br/><br/><b>Conditions for Returns </b>
                    <br/>1. The product must be unused, unworn, unwashed and without any flaws. For fashion products, products may be tried on to see if the item fits. This will still be considered as unworn.
                    <br/>2. The product must include the original tags, user manuals, warranty cards, freebies, invoice and accessories.
                    <br/>3. The product must be returned in the original and undamaged manufacturer's packaging/box. If the product was delivered in Hoolo.live packaging/box, the same packaging/box should be returned. Do not put tape or stickers directly on the manufacturer's packaging / box.
                    <br/>NOTE: It is important to indicate the Order Number and Return Tracking Number on your return package to avoid any inconvenience/delay in your return process. While handing over your package to Drop-Off station/ Pickup Agent, please collect the Hoolo.live Return Acknowledgment paper and reserve it for future reference. If your returned item does not meet the above requirements, we reserve the right to reject any request for a refund.

                    <br/><br/><b>RETURN PROCESS </b><br/>
                    To return an item, please email customer service at support@hoolo.live to obtain a Return Merchandise Authorization (RMA) number. After receiving a RMA number, place the item securely in its original packaging and include your proof of purchase. Our delivery partner will pick up the package from customer’s address within 3-5 working days from the date of the return request.
                    <br/><br/><b>EXCEPTIONS </b><br/>
                    The following items cannot be exchanged:
                    • Customized or made-to-order products
                    For defective or damaged products, please contact us at the contact details below to arrange a refund or exchange.
                    <br/><br/><b>Please Note </b><br/>
                    • Sale items are FINAL SALE and cannot be returned.

                    <br/><br/><b>Refund Process</b>
                    <br/><br/><b>Issuance of Refunds </b><br/>
                        <p>
                         1. The processing time of your refund depends on the type of refund and the payment method you used. 

                         <br/>2. The refund period / process starts when Hoolo has processed your refund according to your refund type. 

                         <br/>3. The refund amount covers the item price and shipping fee for your returned product. 
                        </p>
                    <br/><b>Refund Types</b>
                    <p>
                    Hoolo will process your refund according to the following refund types 

                    <br/>1. Refund from returns - Refund is processed once your item is returned to the HQ and QC is completed (successful). To learn how to return an item, read our Returns policy per category. 
                    <br/> 2. Refunds from cancelled orders - Refund is automatically triggered once cancelation is successfully processed. 
                    <br/> 3. Refunds from failed deliveries - Refund process starts when the item has reached the seller. Please take note that this may take more time depending on the area of your shipping address. 
                    </p>
                    <table class="table table-bordered">
                    <thead>
                    <tr>
                    <th>
                    Payment Method 
                    </th>
                    <th>
                    Refund Option 
                    </th>
                    <th>
                    Refund Time 
                    </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>Debit or Credit Card </td>
                    <td>Debit or Credit Card Payment Reversal </td>
                    <td>10 working days </td>
                    </tr>
                    <tr>
                    <td>MFS </td>
                    <td>MFS </td>
                    <td>8 working days </td>
                    </tr>
                    <tr>
                    <td>Cash on Delivery (COD) </td>
                    <td>Bank Deposit/ MFS </td>
                    <td>5 working days </td>
                    </tr>
                    </tbody>
                    </table>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>
                                Modes of Refund 
                                </th>
                                <th>
                                Description 
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>Bank Deposit  </td>
                                <td>The bank account details provided must be correct. The account must be active and should hold some balance.  </td>
                            </tr>
                            <tr>
                                <td>Debit Card or Credit Card  </td>
                                <td>If the refunded amount is not reflecting in your card statement after the refund is completed and you have received a notification by Hoolo, please contact your personal bank. </td>
                            </tr>
                            <tr>
                                <td>MFS / Rocket Mobile Wallet  </td>
                                <td>Similar to bank deposit, the amount will be refunded to the same mobile account details which you inserted at the time of payment. </td>
                            </tr>
                        </tbody>
                    </table>
                    <br/><br/><b>QUESTIONS </b><br/>
                    If you have any questions concerning our return policy, 
                    <br/>please contact us at:
                    +8801798776997 support@hoolo.live
               </p>

            </div>
            </div>
        </Container>
        );
    }
    
export default Privacy;