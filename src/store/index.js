import { createStore } from "vuex";


export default createStore({
    strict: true,
    state: {
        postList: [
            {
            user: "John",
            createTime: "Nov 5, 2023",
            content: "Many books require no thought from those who read them, and for a very simple reason; they made no such demand upon those who wrote them."
            },
            {
            user: "Albert",
            createTime: "Nov 5, 2023",
            content: "In the quiet forest, a gentle breeze rustled the leaves of ancient trees, their branches swaying in harmony with nature's song. Sunlight filtered through the canopy, casting dappled shadows on the forest floor, where wildflowers bloomed, and a playful squirrel darted among the fallen leaves, gathering acorns for winter."
            },
            {
            user: "Smith",
            createTime: "Nov 5, 2023",
            content: "Beware of no man more than yourself; we carry our worst enemies within us.",
            image: "https://img.freepik.com/premium-photo/seo-digital-marketing-online-visibility_933496-4788.jpg"
            },
            {
            user: "John",
            createTime: "Nov 5, 2023",
            content: "Always behave like a duck - keep calm and unruffled on the surface but paddle like the devil underneath."
            },
            {
            user: "Smith",
            createTime: "Nov 5, 2023",
            content: "A gift - be it a present, a kind word or a job done with care and love - explains itself!... and if receivin' it embarrasses you, it's because your 'thanks box' is warped"
            },
            {
            user: "Daniel",
            createTime: "Nov 5, 2023",
            content: "I am patient with stupidity but not with those who are proud of it."
            },
            {
            user: "John",
            createTime: "Nov 5, 2023",
            content: "It is by acts and not by ideas that people live."
            },
            {
            user: "Albert",
            createTime: "Nov 5, 2023",
            content: "it is better to know some of the questions than all of the answers."
            },
            {
            user: "Thomas",
            createTime: "Nov 5, 2023",
            content: "As the sun dipped below the horizon, the city lights came to life, illuminating the bustling streets with a vibrant glow. People hurried along the sidewalks, their footsteps echoing in the urban canyons, while food vendors offered delicious aromas that wafted through the air, tempting passersby to indulge."
            },
            {
            user: "John",
            createTime: "Nov 5, 2023",
            content: "Take hold lightly; let go lightly. This is one of the great secrets of felicity in love.",
            image: "https://www.nordicexperience.com/wp-content/uploads/2016/12/Fotolia_122017187_Subscription_Monthly_M.jpg"
            },
  ],
  },
  mutations: {
    // your mutations here
  },
  actions: {
    // your actions here
  },
  getters: {
    // your getters here
  },
});