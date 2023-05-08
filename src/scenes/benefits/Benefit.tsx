import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const childVariant = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity:1, scale: 1}
}

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void
}

const Benefit = ({icon,title,description,setSelectedPage}: Props) => {
  return (
    <motion.div 
        variants={childVariant}
        className='rounded-md border-2 border-gray-100 px-2 py-16 mt-5'>
        <div className='flex justify-center mb-4'>
            <div className='rounded-full border-2 border-gray-100 p-2'>
                {icon}
            </div>
        </div>
        <div >
        <h4 className='font-bold text-center'>{title}</h4>
        <p className='my-3 text-center'>{description}</p>
        <AnchorLink 
              href={`#${SelectedPage.ContactUS}`}
              onClick={() => setSelectedPage(SelectedPage.ContactUS)}
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 text-center"
            >
              <p>Learn More</p>
        </AnchorLink>
        </div>
    </motion.div>
  )
}

export default Benefit