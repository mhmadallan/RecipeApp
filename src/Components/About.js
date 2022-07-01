import Footer from "./Footer";
import Navbar from "./Navbar";

function About() {

    // flex and flex-col are used to organize the children elements vertically 
    return (
        <div className="h-full flex flex-col justify-center items-center gap-20 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
            <Navbar />
            <div className=" flex flex-col justify-center items-center font-myFont text-2xl text-slate-300 mt-64 gap-8 mx-60 w-1/2">
                <h1 className="text-3xl text-slate-900">Who We Are</h1>
                <p>
                    Home cooks are our heroes; it's as simple as that. Tasty is a community built by and for kitchen experts: The cooks who will dedicate two days to a perfect beef bourguignon but love the simplicity of a slow-cooker rendition, too. The bakers who labor over a showstopping 9-layer cake but will just as happily doctor boxed brownies for a rich weeknight dessert. The entertainers who just want a solid snack spread, without spending the whole evening shuffling dishes in and out of the oven.

                    Most importantly, Allrecipes connects home cooks with their greatest sources of inspiration — other home cooks. We're the world's leading digital food brand, and that inspires us to do everything possible to keep our community vibrant. Sixty-million home cooks deserve no less.
                </p>
                <h1 className="text-3xl text-slate-900 mt-20">Our History </h1>
                <p>
                    Founded in 2022, Tasty changed the food world by providing the tools to share recipes and cooking tips, while celebrating the expertise of home cooks online. Since then, Allrecipes has become the world's largest community-driven food brand, providing trusted resources to more than 60 million home cooks each month.

                    Every day, cooks from around the world publish recipes and inspire one another through recipe photos, ratings, reviews, and videos. The combination of the Allrecipes community with our team of editorial and kitchen professionals provides authority found nowhere else on the internet and has turned the brand into an indispensable resource for cooks of all skill levels.

                    You can connect with us and our followers on social media, too. On Facebook, Instagram, and Twitter, browse easy weeknight meals and scour reviews of the world's best air fryers. Find photo-worth dinner inspiration on Instagram. And on YouTube, cook along with Chef John, who serves up creative, new recipes weekly — alongside a few good laughs and a well-timed pun.

                    In 2022, Tasty launched our first podcast, Homemade which you can find on all major audio platforms. Our hosts interview chefs, cookbook authors and home cooks who share their stories, food memories, and favorite moments in the kitchen.

                    If you own an Amazon Alexa or Google Assistant device, you'll find our recipes easily discoverable via Voice search. Apple and Android users can access their saved recipes and search using the Dinner Spinner app.

                </p>
            </div>
            <Footer />
        </div>
    );
}

export default About;