// page title
import { pageTitle } from '../components/Page/pageTitle';

// layout
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';
/*import SectionInner from '../components/Page/SectionInner';
import Indent from '../components/Page/Indent';*/
import IndentInner from '../components/Page/IndentInner';

// typography
import Heading from '../components/Typography/Heading';
import SubHeading from '../components/Typography/SubHeading';
import Paragraph from '../components/Typography/Paragraph';

// banner
import Banner from '../components/Page/Banner';
import LoblawCard from '../assets/loblaw/loblaw-card.svg';

export default function Loblaw() {

    pageTitle('Order Pick History');

    return (
        <Project>
            <Section>
                <Heading type={2}>Order Pick History</Heading>
                <SubHeading>Product Design</SubHeading>
                <Paragraph>
                    <br />
                    The Order Pick History is a module attached to every online order listed within
                    Loblaw’s grocery OPS Portal, a centralized internal tool that enables stores to
                    carry out their day-to-day operations. It provides a list of all tasks actioned
                    on every item associated with a given order, facilitating quick validation and
                    troubleshooting of fulfillment objectives by managers and employees.
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Company:</span>
                    &nbsp;Loblaw Digital
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Team:</span>
                    &nbsp;2 Product Designers, Product Owner
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Timeline:</span>
                    &nbsp;Ongoing
                </Paragraph>
            </Section>

            <Banner
            img={LoblawCard}
            alt='An ongoing project. Reach out for more details' />

            <Section>
                <Heading type={3}>Overview</Heading>
                <Paragraph>
                    Loblaw Digital is an innovation-focused subsidiary of Loblaw Companies Ltd., Canada’s
                    largest food retailer. Focusing on digital solutions for banners operating across grocery,
                    pharmacy and fashion, Loblaw Digital is responsible for tackling complex problems faced
                    today by Canada’s front-liners and consumers. I had the privilege of interning as a product
                    designer on the PC Express (PCX) Fulfillment team during the winter of 2021.
                </Paragraph>
                <IndentInner>
                    Loblaw’s mission is succinctly signified by their slogan - to help Canadians “Live Life Well”.
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>The OPS Portal</Heading>
                <Paragraph>
                    The OPS Portal is a brand-new application set to replace Loblaw’s aging grocery operations tool.
                    One of my first projects involved examining the current platform’s Transaction Logs (collectively
                    referred to as TRX) and collaborating on innovating a renewed experience with another designer.
                    Our final product is set to be implemented as an OPS Portal module.
                </Paragraph>
                <IndentInner>
                    The OPS Portal initiative aims to enhance the scalability of Loblaw’s grocery operations platform
                    through a complete in-house rebuild of its existing components.
                </IndentInner>
            </Section>
            
        </Project>
    );
}
