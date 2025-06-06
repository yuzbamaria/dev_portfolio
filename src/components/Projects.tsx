export default function Projects() {
    return (
        <section>
            <h2>FEATURED WORK</h2>
            <div>
                <div className="flex items-center">
                    <h3>airBNB-style property app - full-stack</h3>
                    <img 
                        src="/airbnc-front-end.netlify.app_.png" 
                        alt="airBNB-style property app" 
                        className="w-sm"/>
                    <div className="flex ">
                        <button className="w-xxs">View project</button>
                        <button className="w-xxs">GitHub</button>
                    </div>
                </div>
                <div className="flex items-center"> 
                    <h3>Password generator</h3>
                    <img 
                        src="/password_generator.png" 
                        alt="password generator" 
                        className="w-sm" />
                    <div>
                        <button className="w-xxs">View project</button>
                        <button className="w-xxs">GitHub</button>
                    </div>
                </div>
                <div className="flex items-center">
                    <h3>Code quiz</h3>
                    <img 
                        src="/code_quiz.png" 
                        alt="code quiz" 
                        className="w-sm"/>
                    <div>
                        <button className="w-xxs">View project</button>
                        <button className="w-xxs">GitHub</button>
                    </div>
                </div>
            </div>
        </section>
    )
}