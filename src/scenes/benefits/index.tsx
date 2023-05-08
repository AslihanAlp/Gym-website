import HText from "@/shared/HText"
import { SelectedPage, BenefitType } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import {motion} from "framer-motion"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi atque provident natus quos, labore autem cumque incidunt nihil molestias quam"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi atque provident natus quos, labore autem cumque incidunt nihil molestias quam"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi atque provident natus quos, labore autem cumque incidunt nihil molestias quam"
    },
]

const container = {
    hidden: {},
    visible: {
        transition:{staggerChildren: 0.2}
    },
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
    return(
        <section 
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
          <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{once: true, amount:0.5}}
           transition={{duration: 0.5}}
           variants={{
               hidden:{opacity:0, x:-50},
               visible:{opacity:1, x:0 }
           }}
          className="md:my-5 md:w-3/5">
            <HText>More Than Just A Gym</HText>
            <p className="my-5 text-sm">
              We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}
            className="md:flex items-center justify-between gap-8 mt-5">
           {benefits.map((benefit: BenefitType)=>(
            <Benefit 
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}/>
           ))}
          </motion.div>
          <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            <img 
                className="mx-auto"
                alt="benefits-page-graphic"
                src={BenefitsPageGraphic}/>
            <div>
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{once: true, amount:0.5}}
                          transition={{duration: 0.5}}
                          variants={{
                              hidden:{opacity:0, x:50},
                              visible:{opacity:1, x:0 }
                          }}>
                            <HText>MILLIONS OF HAPPY MEMBERS GETTING {""}
                            <span className="text-primary-500">FIT</span>
                            </HText>
                        </motion.div>
                    </div>
                    
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true, amount:0.5}}
                  transition={{delay: 0.2, duration: 0.5}}
                  variants={{
                      hidden:{opacity:0, x:-50},
                      visible:{opacity:1, x:0 }
                  }}>
                    <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, commodi aut ipsam itaque vitae porro esse iure doloremque iusto quibusdam sint quas velit laudantium error eaque consectetur? Esse, necessitatibus assumenda. Perferendis, ullam. Rerum maxime voluptatem doloremque adipisci nihil eum nisi maiores corrupti esse, non odit sint libero in magnam culpa?</p>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quas, officiis, perferendis ducimus voluptatum, fugiat at laboriosam architecto nisi exercitationem deserunt dolores obcaecati ipsam sapiente nam dignissimos asperiores commodi totam!</p>
                </motion.div>
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>
                          Join Now
                        </ActionButton>
                    </div>
                </div>
            </div>
          </div>
        </motion.div>
        </section>
    )
}

export default Benefits