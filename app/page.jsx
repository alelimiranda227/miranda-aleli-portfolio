import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Educator/ Full Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Aleli Miranda</span>
            </h1>
            <p className="max-w-[520px] mb-9 text-white/80">With over 11 years of expertise in teaching
             IT subjects across basic and higher education, 
             I have cultivated a profound passion for technology and innovation.
             I am now leveraging my extensive knowledge and dynamic teaching 
             experience to embark on an exciting new journey as a Full Stack Developer.
            </p>
            {/* btn and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2"
              >
                <a href="/assets/resume/AleliMiranda_Resume.pdf" download className="flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl"/>  
                </a>
              </Button>    
              <div className="mb-8 xl:mb-8">
                <Social 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex 
                  justify-center items-center text-accent text-base hover:bg-accent 
                  hover:text-primary hover:transition-all duration-500" 
                 />
              </div>  
            </div>
          </div>
          {/* photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;