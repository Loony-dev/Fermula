export const ROUTES = {
    INTRO: 'intro',
    PROFILE: 'profile',
    MENU: 'menu',
    GARAGE: 'garage'
}

export const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: {  breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 3 }
};

export const DB_URI = "mongodb+srv://loonydev:sashalove3003@cluster0.k60bw.mongodb.net/dsbot?retryWrites=true&w=majority"
