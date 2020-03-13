import React from "react";
import styled from "styled-components";
import { GiPlainCircle } from "react-icons/gi";
import { PageStyling } from "../../styles/BaseStyles";
import PageMainContent from "../PageMainContent";
import { ThemeContainer } from "../../themes/definitions/Theme";
import EnhancedPicture from "../../components/basic/Pictures/EnhancedPicture";
import asPage from "../../helpers/asPage";
import DefaultTheme from "../../themes/DefaultTheme/DefaultTheme";
import List from "../../components/basic/List";

interface StyledImportanceOfComponentDesignProps {}

const StyledImportanceOfComponentDesign = styled.div<StyledImportanceOfComponentDesignProps>`
   ${PageStyling}
	padding-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XXL};
	padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XL};

	.main-content {
		max-width: 820px;
	}

   h1 {
      margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.L} 0;
   }

   h2 {
		margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M} 0;
		font-weight: 500;
   }

   h3 {
		margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S} 0;
		color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.NEUTRALS.BASE};
		font-weight: 500;
   }

	p {
		margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M} 0;
	}

	.point-list {
		li {
			font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.M};
			padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XS};

			.circle-bullet {
				height: 0.5em;
				margin-bottom: 2px;
			}
		}
	}

	figcaption {
		font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.XS};
		color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.NEUTRALS.BASE};
		margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XS} 0;
	}
`;

const ImportanceOfComponentDesign: React.FC = ({}) => {
   return (
      <StyledImportanceOfComponentDesign>
         <PageMainContent className="main-content">
            <h1>The Importance of Component Based UI Design</h1>
            <h3>Why a good Developer Experience is worth investing in</h3>
            <p>
               Working for many years in the mobile games industry taught me a lot about how complex
               AAA titles are developed, how working with a major brand licensor can affect decision
               making, and how working on large teams requires careful planning of resources and
               timelines - but it also taught me how NOT to structure processes for development when
               working closely with UI implementation.
            </p>
            <p>
               When I started working on my own side projects using a web tech stack, I taught
               myself about the many other ways in which UI systems can be structured, especially
               using the principles of Atomic design, and started to understand better what a good
               developer experience could be, reinvigorating my passion for development.
            </p>
            <p>
               I have seen so many pitfalls in the development processes I've been a part of, and I
               believe that investing in creating a smooth pipeline for developing UI is worth the
               time it takes to set up, and offers many benefits to the entire creation pipeline.
            </p>
            <h2>The Problem-filled Process</h2>
            <EnhancedPicture
               opensLightbox
               pictureProps={{
                  src: require("public/images/posts/image4.png"),
                  webp: require("public/images/posts/image4.png?webp")
               }}
            />
            <p>Our process of UI implementation in my experience has notably poor practices:</p>
            <List className="point-list" customBullet={<GiPlainCircle className="circle-bullet" />}>
               <>
                  Relies on an outdated WYSIWYG editor, like Adobe Flash, to manually position all
                  of the interfaces.
               </>
               <>
                  Screen layouts are replicated from png image mockups (or a video in the case of
                  motion design).
               </>
               <>
                  UI artists have to provide detailed pixel spacing, font styling, and desired
                  styling effects in annotated versions of the mockups.
               </>
               <>
                  UI programmers are rarely given interactive prototypes to show exactly how the
                  desired interactions are supposed to function.
               </>
               <>
                  UI art assets are created in line with a cohesive style guide that is not followed
                  by any design system on the code side for reusability of components.
               </>
               <>
                  The processed flash files for individual screens generate hundreds of individual
                  classes that are not referenced outside of the screens they are used in.
               </>
               <>
                  Requires meticulous naming of items in flash for the C# make script to run
                  correctly.
               </>
               <>
                  No procedures for isolated testing or usability testing for the UI framework, and
                  no automated testing tools to speak of.
               </>
            </List>

            <h3>Localized issues to the UI pipeline</h3>
            <p>
               This method of developing UI is time consuming and laborious, giving the team major
               development headaches, and the delivered features are often buggy and unpolished.
            </p>

            <List className="point-list">
               <>
                  <strong>Process of implementing designs is tedious and repetitive</strong> leading
                  to capable programmers spending precious project time on poor process &
                  pixel-pushing images around an ill-fitted, outdated program.
               </>
               <>
                  <strong>Designs are often implemented incorrectly</strong> in a myriad of minor
                  ways on the aesthetic level or in functionality due to the limited format of the
                  passed designs, leading to a lot of time spent sending work back through the
                  pipeline.
               </>
               <>
                  <strong>No unified technical solution</strong> when reusable components are
                  limited or nonexistent, forcing developers to solve common, similar problems using
                  sometimes vastly different solutions leading to a codebase that grows increasingly
                  inconsistent.
               </>
               <>
                  <strong>Inflexible UI framework restricting design & UI artists</strong>,
                  requiring them to follow certain limitations that sometimes contradict best
                  practices in UX & UI design.
               </>
               <>
                  <strong>Unmaintainable UI files & code restricts rapid iteration</strong> when
                  simple tweaks and reskins could easily lead to bloated timelines with weeks of
                  extra work piling up every time we needed to address designs iteratively.
               </>
               <>
                  <strong>The make script is not developer experience friendly</strong> often making
                  reusing already created flash assets a more demanding activity instead of a less
                  demanding one, further adding on to wasted time due to the tools & processes.
               </>
               <>
                  <strong>Inability to develop or test UI implementations in isolation</strong>{" "}
                  leading to difficulties when verifying correct implementation of complex states of
                  interaction, and often introduced unintended side effects to other areas of the
                  game.
               </>
               <>
                  <strong>Manually testing from a predetermined checklist</strong> solely means many
                  edge cases or unconventional user behaviours are not caught before release,
                  leading to massive bug backlog that often takes priority of the developers' time.
               </>
            </List>
            <h3>The Case for the Button</h3>
            <p>
               To exemplify the effect of this system, one of the smallest and most common units of
               UI becomes a victim of this process, the humble button. If the existing system has no
               universal button component, and many variations & instances of the button are created
               without a reference to a master, it means developers have to manually update and
               visually verify hundreds of different instances of buttons if even one small change
               is made to the button styling. Leaving so much room for human error in the manual
               checking process often leads to having many inconsistent behaviours and appearances:
            </p>
            <List className="point-list" customBullet={<GiPlainCircle className="circle-bullet" />}>
               <>
                  Incorrectly used art assets such as nine-slice backgrounds, borders, embedded
                  icons, etc.
               </>
               <>
                  Differing button sizes from screen to screen since their dimensions are generally
                  unenforced.
               </>
               <>Text styling or alignment implemented incorrectly.</>
               <>
                  Button states such as hover, press, disabled, etc. set on a per screen basis and
                  being missed altogether sometimes.
               </>
               <>
                  Placement and alignment within parent containers are inconsistent and requires
                  meticulous manual adjustment.
               </>
               <>
                  Button transition animations again must be implemented on a per screen basis
                  reducing confidence in animations remaining consistent across the game.
               </>
            </List>
            <h3>Global issues to the entire development process</h3>
            <p>
               When working with a large team of multidisciplinary peers, this poor process trickles
               out into the larger pipeline and can have devastating effects on multiple areas of
               the software development environment.
            </p>

            <List className="point-list">
               <>
                  <strong>
                     UI implementation is often the bottleneck to the entire project's progression
                  </strong>{" "}
                  due to the slow & error prone methods, often having too much work prepared, ready,
                  and waiting to be implemented on the design & art side, and not enough time for
                  the UI developers to implement it all.
               </>
               <>
                  <strong>
                     Quality of life improvements desired from players, design & UX are bottom
                     priority
                  </strong>
                  which adversely affects the player's experience of a game when their concerns are
                  heard but there's no bandwidth available to make them a reality.
               </>
               <>
                  <strong>
                     Features designed as complete experiences often have to get cut into smaller
                     pieces
                  </strong>{" "}
                  to allow for the minimum viable product of the design to be put in to production,
                  thus sacrificing the integrity of the design & the designer's who want to see
                  their best work reflected in the product by leaving little or no time to return to
                  the original design.
               </>
               <>
                  <strong>
                     Following industry best practices of rapid iteration and failing faster is not
                     possible
                  </strong>{" "}
                  which means often the same stale tropes of interaction patterns and feature
                  designs are followed, which doesn't encourage a team culture of experimentation
                  and iterative design.
               </>
               <>
                  <strong>
                     UI artists suffer a large disconnect from the process by which their work is
                     created
                  </strong>{" "}
                  when limited tools can restrict the possibilities of their visual explorations,
                  and their existing systematic way of creating styled components isn't represented
                  in a common design system.
               </>
               <>
                  <strong>The cost to start up new projects can be astronomical</strong> when there
                  are few shared resources to start from, including a lack of a boilerplate UI kit
                  to be able to reuse and retheme a design system easily for prototyping &
                  developing future games.
               </>
               <>
                  <strong>
                     Interteam & interstudio support and knowledge sharing is not inherent to the
                     process
                  </strong>{" "}
                  because each team uses their tools so differently without having standardized
                  processes, so as a result building a collaborative culture doesn't happen
                  naturally and teams become very siloed.
               </>
            </List>

            <h2>A better way: Atomic Design</h2>

            <p>
               When working with a UI design system, there is benefit in addressing it on an{" "}
               <strong>atomic scale</strong>, in a modular, organized & scalable way, by building it
               up from bottom to top. Screens shouldn't be built by forcing entire design layouts
               into one component, but instead we should look at inventing <strong>modular</strong>{" "}
               and <strong>reusable</strong> components for all of our screens that are modelled on
               the reusable patterns found in the UI style guide.
            </p>

            <EnhancedPicture
               opensLightbox
               pictureProps={{
                  src: require("public/images/posts/image2.png"),
                  webp: require("public/images/posts/image2.png?webp")
               }}
               caption={
                  <a
                     rel="noopener noreferrer"
                     target="_blank"
                     href="https://mytictalk.blog/2018/06/06/design-system-the-holy-grail-of-things/"
                  >
                     Credit: mytictalk.blog, Design system - the 'holy grail' of things.
                  </a>
               }
            />

            <p>
               An Atomic Design system enompasses all that goes into creating and maintaining robust
               design systems, allowing for the capability to roll out higher quality, more
               consistent UI products, faster than ever before. Web designer Brad Frost has coined
               this term of design thinking, and it has quickly become a standard way to structure
               web-based frameworks for UI.
            </p>
            <EnhancedPicture
               opensLightbox
               pictureProps={{
                  src: require("public/images/posts/image1.png"),
                  webp: require("public/images/posts/image1.png?webp")
               }}
               caption={
                  <a
                     rel="noopener noreferrer"
                     target="_blank"
                     href="https://www.gdcvault.com/play/1026400/Building-a-Unified-Cross-Project"
                  >
                     Credit: Sybo games 2019, Building a unified cross-project UI framework (Unity)
                     gdcvault.com/play/1026400/Building-a-Unified-Cross-Project.
                  </a>
               }
            />
            <p>
               By taking the time to set up your foundational reusable UI pieces as modular
               components, you can combine them into larger and more layered containers that can be
               reused on multiple screens that require it, while still maintaining isolated
               modifiable components.
            </p>
            <h3>How it improves the development pipeline</h3>
            <EnhancedPicture
               opensLightbox
               pictureProps={{
                  src: require("public/images/posts/image3.png"),
                  webp: require("public/images/posts/image3.png?webp")
               }}
            />

            <List className="point-list">
               <>
                  <strong>Easier to reuse, modify, and test implementations</strong> by separating
                  out UI presentation and interaction logic into isolated components.
               </>
               <>
                  <strong>Gives confidence in quality</strong> when each screen is referencing the
                  single source of truth for UI components; a well-designed system makes it easy to
                  do the right things and annoying (but not impossible) to do the wrong things.
               </>
               <>
                  <strong>Easier to maintain the system</strong> so that if changes are requested
                  later, it's easy to modify the system's components without it being a huge
                  endeavour to manually update all the scattered pieces of UI.
               </>
               <>
                  <strong>Gives freedom to developers</strong> who don't have to repeat the same
                  repetitive actions & coding practices by being able to easily access a library of
                  shared components.
               </>
               <>
                  <strong>Less time wasted by devs</strong> on pixel pushing tedium, allowing them
                  more time to focus on what matters, like getting features in and bugs fixed.
               </>
               <>
                  <strong>Creates a shared design language</strong> between design, art, and
                  developers that speeds up product delivery and improves UX consistency.
               </>
               <>
                  <strong>UI programmers stop constantly reinventing the wheel</strong> allowing
                  them to focus more on UI composition rather than UI creation.
               </>
            </List>

            <h3>Aiming to work smarter not harder</h3>

            <p>
               I have been drawn towards web programming practices for it's innate use of these
               principles that makes the developer experience a more frustration-free one, the
               difference can feel like night and day. I no longer feel like I'm constantly
               repeating myself in the same old routines of poor practices, tools, and methodologies
               that I cannot control or see those around me trying to improve.
            </p>

            <p>
               I believe it's worth putting in the effort up front before diving into full
               production development - what in games should be a period for proper pre-production -
               to architect systems for intelligent development workflows and practices. For a
               studio who will have more than one product in their suite, it's the work you have to
               put in once and diligently maintain that can open the doors to much faster
               development cycles of newer & better products.
            </p>
         </PageMainContent>
      </StyledImportanceOfComponentDesign>
   );
};
export default asPage(ImportanceOfComponentDesign, DefaultTheme);
