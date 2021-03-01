---
title: "Crafting the Research Proposal"
excerpt: "Writing the research proposal was one of the hardest documents I've written, not because the document is difficult to put together but because of how difficult it is to position your work within the existing ecosystem of knowledge."
date: 2020-12-18
categories:
  - OpenAIScholars
tags:
  - Open AI Scholars Program
  - Advice
  - Research
  - Research Idea
  - Research Proposal
---
*This post was written as apart of the Open AI Scholars program. It is Part 5 in the series. Read [Part 1]({% post_url 2020-10-25-learning-how-to-learn %}), [Part 2]({% post_url 2020-11-10-first-month-checkin %}), [Part 3]({% post_url 2020-11-20-developing-a-research-pov %}), [Part 4]({% post_url 2020-11-23-celebrating-the-oai-curriculum %}), [Part 6]({% post_url 2021-01-15-pivoting-your-research %}), [Part 7]({% post_url 2021-01-29-huggingface-tutorial %}), [Part 8]({% post_url 2021-02-12-generating-loss-curves %}). Find [all](/tags/#open-ai-scholars-program) posts relating to the program here.*

Writing the research proposal was one of the hardest documents I've written, not because the document is difficult to put together but because of how difficult it is to position your work within the existing ecosystem of knowledge. It forces you to ask yourself, am I attempting something that's already been done? If it hasn't been done, is it because people don't find utility in it? Is the research project appropriately equipped to solve the question I'm posing? Am *I* appropriately equipped to understand and solve the question I'm posing? As with all endeavors, the hardest thing to do is to get comfortable with the ambiguity and uncertainty. This post should give some gentle guidance on how to find a research idea and recommendations on what to include in the proposal.

#### Coming up with the research idea

Brainstorming research ideas are difficult. How do you know it's innovative enough? How do you know the work is useful enough to move the field before? Is it even worth researching? I asked myself these questions and more as I worked through my list of ideas, each new idea less interesting than the former. The most helpful piece of advice I received was to find my favorite papers and ask the question, what about these papers interest you? If you could add one more section to that paper, what would it be about? By answering this question, you're essentially beginning to explore how to incrementally push the boundaries of existing work within the industry.

If you're looking for a project that's larger (but still plausible), I've found it incredibly useful to restate the key idea behind a research paper in one sentence and then switch it's domain. For example, if the key idea behind GPT-2 was that all (read: most) NLP problems could be formulated (and solved) as different variants of the text completion problem, the next question becomes, can we use the same method to complete *images* too? Another example can be found within the scaling laws paper. It mapped the relationship between compute and loss, which helped to identify the expected performance of language models as compute scaled. An interesting next question could be, what is the relationship between *data* and loss? is there a relationship that would allow us to estimate performance as data scales? In both scenarios, the change of a single word in the original research question gave rise to a completely different, interesting, and substantial area of research that have not yet been explored.

#### Making the proposal

Once you have your idea, the next stage is writing the research proposal. While it's tempting to spend a tremendous amount of time perfecting the proposal, I'd **strongly** recommend against that. Your final research project very rarely perfectly maps to the proposal you've given and if it does, you likely aren't exploring an area of research that truly pushes the boundary of knowledge in the space. *If you already know what will happen, you're confirming a theory, not running an experiment.* While most researchers might have an idea of what results they could expect, part of the goal of research is to try something new, something for which there isn't enough knowledge to know exactly what would happen or why it happens as it does.

The research proposal is a brief document (2-4 pages) that documents your idea and gives both you and your research mentor a guideline for how you plan to structure your experiments and the relevancy of your project on the field. As mentioned in [*part 3 of the Open AI Scholar series*]({% post_url 2020-11-20-developing-a-research-pov %}), the stronger your point of view of the industry, the more thoughts you should have about where you think the future of ML/AI is going. Whatever you find intriguing or missing from the dialogue is likely what you should research.

#### Structuring the proposal

Included below are sections that are common to research proposals and what I believe are relevant questions to answer within each section.

1. **Research Title**

    This one is self explanatory. It should be descriptive enough that someone with enough context within your area of research would understand the goal and/or direction of the research project.

2. **Background**

    This section should give the audience enough context to understand the current state of research within the area you're exploring. Some relevant questions to answer include:

    - What is known and unknown about the research area you're exploring?
    - Are there any papers whose results inspired this research question?
    - Are there any papers whose accomplishments are necessary to understand the context of this question?
    - Are there any known limitations to your research project (areas that you've had to assume or don't have the capacity to test)? Only limitations that relate to the direction of the study (as opposed to details around implementation) should be mentioned in this section.

3. **Research Motivation**

    This section should dive into the justification behind your research question. It is sometimes included in the *Background* section instead of being listed as a stand alone section. Some relevant questions to answer include:

    - Why are you researching this question?
    - Do you have any personal motivations for exploring this question?
    - By solving this question, what do you hope to add to the body of knowledge within the industry?

4. **Research Questions**

    This section explores the questions the research project aims to answer. As you begin researching, it can be extremely beneficial to understand what specific questions you're trying to solve. This list should be revisited most often to make sure that as your research pivots, the new experiments still solve these questions, or that the questions are adjusted to get a better sense of what questions your project is solving.

    Also, this section is sometimes included in the *Background* section instead of being listed as a stand alone section.

5. **Research Objectives** *or* **Project Goals**

    This section sets the aims and objectives for the research project. At a high level, this section should specifically address what the project ios aiming to know, prove, and analyze. The goals should detail the specific research benefits of the project and optionally, any personal goals that would be accomplished by executing this research idea.

6. **Research Methodology**

    This section outlines the planned approach towards the research project. It's an overview of how one plans to structure the research. Some relevant questions to answer include:

    - How do you plan to achieve the goals listed in *Project Goals*?
    - What equipment or software is needed to conduct the research?
    - Do you have access to the data needed for the models you plan to train? Will any data collection or data augmentation be needed?
    - Why did you choose the tools you've mentioned and are there any barriers or pitfalls from this choice?
    - What outcome do you expect from your research?
    - How do you plan to evaluate your research results?

7. **Research Timeline** *or* **Project Timeline**

    This section should outline the execution of the project and the expected deliverables for the project with dates where appropriate. The structure of this section is variable and highly dependent on the project. However, most projects will start with 1) a literature review of papers in the same research sub area and 2) a period where the project (or first few experiments) are scoped. This should include tasks such as collecting the dataset, etc.

8. **Bibliography** *or* **Relevant Research**

    This section is simple! It should include a list of papers that are related to the topic you're exploring and any resources you may have used to build the foundation of your proposal.

That's it!

Note that there are multiple variations to how one can structure their proposal. Although I used the above format, there are many formats you can use and researchers frequently combine sections, such as *Background* and *Research Motivation*, into longer sections that cover the same material. As always, do what makes the most sense for you.

If you'd like to learn more about my current research project and see the accompanying proposal, check out my next post - [Part 6]({% post_url 2021-01-15-pivoting-your-research %}) of the Open AI Scholar series.
