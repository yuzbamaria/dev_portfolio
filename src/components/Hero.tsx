export default function Hero() {
    return (
        <section className="flex">
            <div>
                <p>Hi, I'm Maria Yuzba</p>
                <h1 className="font-semibold text-5xl">
                    Fullstack <br /> <span>developer</span>
                </h1>
                <p>Crafting the future of web experiences through clean, efficient, and captivating frontend design.</p>
                <ul className="flex">
                    <li>Email</li>
                    <li>GitHub</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
            <div>
                <img 
                    src="/portfolio_img.jpeg" 
                    alt="portfolio image" 
                    className="w-sm"
                />
            </div>
        </section>
    )
};

