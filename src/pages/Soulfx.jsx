// page title
import { pageTitle } from '../components/Page/pageTitle';

// layout
import Project from '../components/Page/Project';
import Section from '../components/Page/Section';
import SectionInner from '../components/Page/SectionInner';
import IndentInner from '../components/Page/IndentInner';

// img containers
import Banner from '../components/Page/Banner';
import ImgContainer from '../components/Page/ImgContainer';
import ImgFluid from '../components/Page/ImgFluid';
import ImgCaption from '../components/Page/ImgCaption';
import Img from '../components/Page/Img';

// typography
import Heading from '../components/Typography/Heading';
import SubHeading from '../components/Typography/SubHeading';
import Paragraph from '../components/Typography/Paragraph';
import Strong from '../components/Typography/Strong';

// banner
import SoulfxCard from '../assets/soulfx/soulfx-card.svg';

// visuals
import Outline from '../assets/soulfx/soulfx-outline.svg';
import JobsToBeDone from '../assets/soulfx/soulfx-jtbd.svg';
import EndtoEnd from '../assets/soulfx/soulfx-end-to-end.svg';
import RecordIA from '../assets/soulfx/soulfx-record_ia.svg';

import RecordList from '../assets/soulfx/soulfx-company_list.svg';
import CertList from '../assets/soulfx/soulfx-cert_list.svg';
import RecordDetails from '../assets/soulfx/soulfx-company_details.svg';
import ProgramDetails from '../assets/soulfx/soulfx-program_details.svg';
import RecordAddition from '../assets/soulfx/soulfx-company_addition.svg';
import RecordAddConfirm from '../assets/soulfx/soulfx-company_addition_done.svg';

import ProgramSelect from '../assets/soulfx/soulfx-program_selection.svg';
import ProgramCardDispense from '../assets/soulfx/soulfx-program_cards.svg';

import BreadCrumbs from '../assets/soulfx/soulfx-breadcrumbs.svg';
import ActivationStatus from '../assets/soulfx/soulfx-activation_status.svg';
import CertSwitches from '../assets/soulfx/soulfx-cert_switches.svg';

export default function Soulfx() {

    pageTitle('Patient Support App');

    return(
        <Project>
            <Section>
                <Heading type={2}>Patient Support App</Heading>
                <SubHeading>Software Design</SubHeading>
                <Paragraph>
                    <br />
                    Soulfx’s Patient Support Application is a web-based platform developed for
                    a pharmaceutical firm. It facilitates the remote management and operation
                    of a service that provides financial assistance to Canadian patients for medical
                    payments such as prescriptions and therapy.
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Company:</span>
                    &nbsp;Soulfx Technologies Inc.
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Client:</span>
                    &nbsp;Multinational pharmaceutical company
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Role:</span>
                    &nbsp;Software Designer with 1 UX Designer, 4 Developers, 1 Product Owner and 1 Project Manager
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Timeline:</span>
                    &nbsp;8 weeks
                </Paragraph>
                <Paragraph>
                    <span className='bold'>Status:</span>
                    &nbsp;Launched {'\u{1F680}'}
                    <br />
                    <br />
                </Paragraph>
                <IndentInner>
                    <Paragraph>
                        <span className='italic'>
                            Note: due to a non-disclosure agreement with our client, mockup components that would
                            contain manufacturer, program or drug names have been populated with placeholder text
                        </span>
                    </Paragraph>
                </IndentInner>
            </Section>

            <Banner
            img={SoulfxCard}
            alt='Soulfx Patient Support App' />

            <Section>
                <Heading type={3}>Overview</Heading>
                <Paragraph>
                    Soulfx Technologies Inc is a Mississauga-based software consulting
                    firm that focuses on creating applications for clients within the
                    healthcare industry. I worked as a Software Designer within the product
                    team during the summer of 2020, where we worked closely with a multinational
                    pharmaceutical client in executing an end-to-end design project.
                </Paragraph>
                <IndentInner>
                    <Strong>
                        Soulfx specializes in the development of software products
                        that drive innovation within the healthcare sector.
                    </Strong>
                </IndentInner>
            </Section>

            <Section>
                <Heading type ={3}>An Unprecedented Health Crisis</Heading>
                <Paragraph>
                    COVID-19 has brought with it a global-scale challenge that has pushed the capacity
                    of our healthcare industries to their limits. Our client approached us with the objective of
                    moving their financial aid service online – a shift towards web-based operations aimed at
                    mitigating the risks imposed by the pandemic on immunocompromised individuals.
                </Paragraph>
                <IndentInner>
                    <Strong>
                        How can we design a platform that will enable our client to deliver their
                        support service to patients remotely?
                    </Strong>
                </IndentInner>
            </Section>

            <ImgContainer>
                <ImgFluid>
                    <Img
                    src={Outline}
                    alt='The design outline' />
                </ImgFluid>
                <ImgCaption>
                    An outline of our approach
                </ImgCaption>
            </ImgContainer>

            <Section>
                <Heading type={3}>Our Client's Assistance Service</Heading>
                <Paragraph>
                    Manufacturers registered under our client’s service platform offer their
                    own collection of financial assistance and/or therapy program plans, which
                    provide prescription certificates. These certificates in turn can be redeemed
                    by patients for reimbursements upon purchasing select drugs. Program plans
                    can be restricted to certain provinces or offered Canada-wide.
                </Paragraph>
                <IndentInner>
                    <Strong>
                        Our client works alongside pharmaceutical manufacturers in making prescription
                        payment easier by providing reimbursements for medical expenses.
                    </Strong>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Jobs to Be Done</Heading>
                <Paragraph>
                    We designed our client’s application from the ground up – however, we worked
                    with a service that was already in operation. Thus, we conducted generative research
                    with the intention of identifying our user groups and what outcomes each group wants
                    to achieve by interacting with our platform.
                </Paragraph>
            </Section>

            <ImgContainer>
                <ImgFluid>
                    <Img
                    src={JobsToBeDone}
                    alt='our user groups and objectives' />
                </ImgFluid>
                <ImgCaption>
                    Our user groups and objectives
                </ImgCaption>
            </ImgContainer>

            <Section>
                <IndentInner>
                    <Strong>
                        We learned about who our users are and what they want out of our platform.
                        What do their journeys within the existing service look like?
                    </Strong>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>The Reimbursement Lifecycle</Heading>
                <Paragraph>
                    We sought to get an in-depth look at how the support platform itself works and how
                    our users interact with it. To visualize our user journeys, I created a lifecycle
                    diagram to document the steps taken from onboarding a new manufacturer to distributing
                    the manufacturer’s program cards to patients.
                </Paragraph>
            </Section>

            <ImgContainer>
                <ImgFluid>
                    <Img
                    src={EndtoEnd}
                    alt='end-to-end reimbursement flow' />
                </ImgFluid>
                <ImgCaption>
                    End-to-end reimbursement flow
                </ImgCaption>
            </ImgContainer>

            <Section>
                <IndentInner>
                    <Strong>
                        Upon mapping out the patient journey, we learned that each program could provide only one of
                        two types of certificates.
                    </Strong>
                </IndentInner>
                <Paragraph>
                    National-level certificates enable reimbursement access to patients regardless of province, while
                    provincial-level certificates restrict a program’s availability to specified provinces. Furthermore,
                    the availability of cards offered by programs continuously fluctuate based on demand.
                    <br />
                    <br />
                </Paragraph>
            </Section>

            <Section>
                <Heading type={3}>
                    Record Information Architecture
                    <br />
                    <br />
                </Heading>
                <IndentInner>
                    <Strong>
                        It became clear from modelling the caseworker journey that there was
                        a discernible hierarchy in how records are organized.
                    </Strong>
                </IndentInner>
                <Paragraph>
                    I took this as an opportunity to create an architecture diagram and illustrate a granular view
                    of the details being managed within each tier of information.
                </Paragraph>
            </Section>

            <ImgContainer>
                <ImgFluid>
                    <Img
                    src={RecordIA}
                    alt='record information artichetcure' />
                </ImgFluid>
                <ImgCaption>
                    Visualizing architecture made it easier to keep track of how records are structured
                </ImgCaption>
            </ImgContainer>

            <Section>
                <Paragraph>
                    Due to the limited amount of time we had to develop a comprehensive understanding of our
                    client’s support program, these flows would play a critical role later in the project
                    with ensuring alignment with our developers.
                </Paragraph>
                <IndentInner>
                    <Strong>
                        Clarity was established regarding how our client’s service operates. How can we ensure
                        that our to-be design encompasses the tasks we have outlined?
                    </Strong>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Our Designed Solution</Heading>
                <Paragraph>
                    Our designed solution is an application consisting of two components: a record management dashboard for
                    our caseworkers and a small public-facing portal for our patients to retrieve program cards through. We
                    ensured during prototyping that all tasks defined by the end-to-end reimbursement journey were facilitated
                    by each component for its respective user group.
                </Paragraph>
            </Section>

            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Record Management Dashboard</Heading>
                    <Paragraph>
                        We employed a single-column layout to allow caseworkers to quickly scan top-down through lists and
                        record details - this pattern is kept consistent across all tiers of information.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img item
                    src={RecordList}
                    alt='Company record list' />
                    <Img item
                    src={CertList}
                    alt='Certificate record list'/>
                </ImgFluid>
                <ImgCaption>
                    Company and certificate record lists
                </ImgCaption>
                <ImgFluid>
                    <Img item
                    src={RecordDetails}
                    alt='Company details' />
                    <Img item
                    src={ProgramDetails}
                    alt='Program details'/>
                </ImgFluid>
                <ImgCaption>
                    Company and program record details
                </ImgCaption>
                <ImgFluid>
                    <Img item
                    src={RecordAddition}
                    alt='Record addition' />
                    <Img item
                    src={RecordAddConfirm}
                    alt='Addition confirmation'/>
                </ImgFluid>
                    <ImgCaption>
                        Record additon
                    </ImgCaption>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Public-facing Portal</Heading>
                    <Paragraph>
                        We aimed to make the card retrieval screens as simple as possible for our early adopters and easy
                        to navigate using both desktop and touch inputs.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img item
                    src={ProgramSelect}
                    alt='Program selection' />
                    <Img item
                    src={ProgramCardDispense}
                    alt='Program card retrieval' />
                </ImgFluid>
                <ImgCaption>
                    Program selection and card retrieval
                </ImgCaption>
            </ImgContainer>

            <Section>
                <IndentInner>
                    <Strong>
                        Working under tight deadlines, our objective was to get our client operating fully remotely
                        and deliver designs for our platform that can be iterated upon.
                    </Strong>
                </IndentInner>
            </Section>

            <Section>
                <Heading type={3}>Key Interactions</Heading>
                <Paragraph>
                    We validated our record dashboard design by placing caseworkers in scenarios that mirror tasks they
                    might encounter during their day-to-day work. Through the design, we wanted caseworkers to be able
                    to efficiently add, delete and edit records pertaining to any manufacturer, program, certificate and
                    drug. Additionally, they must be able to make changes to the provincial or national availability of
                    any given program.
                </Paragraph>
                <IndentInner>
                    <Strong>
                        We incorporated navigation patterns that aimed to expedite the completion of everyday duties
                        for our client’s caseworkers.
                    </Strong>
                </IndentInner>
            </Section>

            <ImgContainer>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Breadcrumb Navigation</Heading>
                    <Paragraph>
                        Breadcrumbs simplify the dashboard navigation experience by reducing the number of clicks
                        required to access higher-order screens from lower tiers of information. Our caseworkers
                        often have to make changes to a company’s details editing a program or certificate - breadcrumbs
                        mitigate the need to repeatedly click the “Back” button.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={BreadCrumbs}
                    alt='Breadcrumbs'/>
                </ImgFluid>
                <SectionInner>
                    <Heading type={4} weight='heavy'>Activation Switches</Heading>
                    <Paragraph>
                        Manufacturers frequently make changes to the programs and certificates they offer, and will occasionally
                        switch between servicing at the provincial and national levels. Activation switches serve as visual 
                        indicators that display the status of company, program and certificate records. They are placed at the
                        top of each record detail screen.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen
                    src={ActivationStatus}
                    alt='Activation switch on record details'/>
                </ImgFluid>
                <SectionInner>
                    <Paragraph>
                        We also placed activation switches at the list level for certificates to avoid the need for caseworkers
                        to navigate to each individual certificate’s property screen to activate or deactivate it. Activating a
                        national-level certificate will automatically disable any active provincial-level certificates, and vice
                        versa.
                    </Paragraph>
                </SectionInner>
                <ImgFluid>
                    <Img screen 
                    src={CertSwitches}
                    alt='Provincial and national-level switches'/>
                </ImgFluid>
            </ImgContainer>

            <Section>
                <Heading type={3}>
                    Takeaways and Opportunities
                    <br />
                    <br />
                </Heading>
                <IndentInner>
                    <Heading type={4}>
                        Designs are products of curiosity and collaboration.
                    </Heading>
                </IndentInner>
                <Paragraph>
                    A concrete understanding of our client's service in conjunction with our users' expectations
                    with the product were critical to the execution of each design phase. Working on this project
                    taught me that effective designs are created by working side-by-side with people who possess
                    varying domains of knowledge, some of which may not overlap.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        We can utilize design to help out our essential industries, even amid a pandemic.
                    </Heading>
                </IndentInner>
                <Paragraph>
                    I do not have the resources nor the know-how to help patients with their medical expenses,
                    but a critical element of my role as a designer was to learn about the people who do. The
                    project provided an opportunity to leverage this understanding and contribute to improving
                    accessibility to healthcare services through design.
                </Paragraph>
                <IndentInner>
                    <Heading type={4}>
                        There are still opportunities to streamline the navigation experience for our dashboard solution.
                    </Heading>
                </IndentInner>
                <Paragraph>
                    Features I would explore next include search and filter functions. As the number
                    of registered records within the platform grows, scrolling to find items within lists may become
                    more laborious. The ability to search for and filter items would address such issues by providing
                    our caseworkers direct access to the records they need to work with.
                </Paragraph>
            </Section>
        </Project>
    );
}
