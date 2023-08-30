import { Injectable } from "@angular/core";
export interface Review {
    id?: any;
    name: string;
    date?: Date;
    content?:string;
    
}

@Injectable({ 
    providedIn: 'root' 
})
export class ReviewService {
    
    private reviews: Review [] = [
       { id: 1,
        name:'Julia Addams',
        date: new Date(),
        content:'“Even when you have nothing left in your life, hope is the one thing that can never be taken away.”  This book is the best!!'
       },
       { id: 1,
        name:'Tom Smith',
        date: new Date('11/21/2022'),
        content:"Love domestic thrillers and stories about coupes, their secrets and what they claim to be their truths. Sarah is a great lawyer and is trying to be a great wife. Adam is trying to be a great husband but feels like he is put on the back burner to Sarah's career. Adam does that coward thing and has an affair. What could go wrong? It's not like he would get caught because his side girl gets killed - right? Wrong. Now Sarah is stuck trying to defend Adam and the reader doesn't know who to believe. I really enjoyed this book and will recommend it to many others. I think it would be a great book club selection.",
       },
       { id: 1,
        name:'Tina B',
        date: new Date('03/07/2023'),
        content:"The Perfect Marriage by Jeneva Rose, is a thriller that you won’t be able to stop listening to. As an audiobook, it was very engaging and I couldn’t stop listening. This story explores the marriage of Sarah and Adam. Adam has been accused of murdering his lover and Sarah (a highly successful attorney) has decided to defend him. Right away, the cracks are exposed in their marriage and explored. While Sarah is a highly successful attorney, Adam is a “kept” man with a struggling writing career. There are many credible suspects to the murder that are explored throughout the story line. The events between the characters and the narration kept me listening until the very end. Going back and forth between Adam’s and Sarah’s point of view really kept the story engaging as you had the opportunity to hear thoughts/feelings from each. This book keeps you guessing until the very end. I highly recommend this book.",
       },
       { id: 2,
        name:'Selena Gomez',
        date: new Date(),
        content:"Ana really said, whether morally gray is your favorite OR NOT (shoutout to Twisted Lies' iconic dedication), let me give you someone you can publicly swoon over without shame because Kai mf Young is everything."
       },
       {
        id:2,
        name:'Angelina',
        date: new Date('07/17/2023'),
        content:'This book was quite heavy on serving nothing and it did.',
       },
       {
        id:2,
        name:'Bred Pitt',
        date: new Date('01/11/2022'),
        content:'"Just knowing you existed somewhere in this world was enough." Ana has once again proven herself to be an exceptional writer. I enjoyed reading this book and found myself eagerly turning each page to see what would happen next."',
       },
       {
        id:3,
        name:'Anna J',
        date: new Date("04/04/2023"),
        content:'Watch me cry about this book until November.',
       },
       {
        id:3,
        name:'Leonardo DV',
        date: new Date("01/29/2022"),
        content:'THE COVER FOR THIS BOOK IS ABSOLUTELY GORGEOUS OMGG',
       },
       {
        id:4,
        name:'Mia Styles',
        date: new Date("02/05/2023"),
        content:"What a lovely experience this was, listening to the incomparable Meryl Streep bring to life a book of Ann Patchett’s. As much as I have my go-to narrators, Meryl Streep brought a whole new level of humanity, humor, and kindness to each character and to the story as a whole. I could just feel her nuanced, multi-faceted intelligence through her craft. If other narrators give 5-star readings, Meryl Streep is off the charts."
       },
       {
        id:6,
        name:'Marco M',
        date: new Date("12/9/2022"),
        content:"I’m quite disappointed with this book. Nearly the first 40-50% of the book was fluff that could’ve been trimmed or cut all together. I found myself quite bored. Once the story did finally pick up, it was completely rushed and crammed into the last 15% of the book which is disappointing; with no true resolution. I wouldn’t recommend this book."
       }


]
getReviews(){
    return this.reviews;
}
}