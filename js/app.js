/* =====================================================
   DOM REFERENCES
===================================================== */

const categoryMenu =
document.getElementById("categoryMenu");

const questionsContainer =
document.getElementById("questionsContainer");

const searchBox =
document.getElementById("searchBox");

/* =====================================================
   HELPERS
===================================================== */

function generateId(text){

    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g,"-");
}

function escapeHtml(text){

    if(!text){
        return "";
    }

    return text
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;");
}

function copyCode(button){

    const code =
    button.parentElement
          .querySelector("code")
          .innerText;

    navigator.clipboard
             .writeText(code);

    button.textContent =
    "Copied!";

    setTimeout(() => {

        button.textContent =
        "Copy";

    },2000);
}

/* =====================================================
   SIDEBAR BUILD
===================================================== */

function buildSidebar(){

    categoryMenu.innerHTML = "";

    Object.keys(data).forEach(category => {

        const count =
        data[category].length;

        const li =
        document.createElement("li");

        li.textContent =
        `${category} (${count})`;

        li.dataset.target =
        generateId(category);

        li.addEventListener("click", () => {

            document
            .getElementById(
                generateId(category)
            )
            .scrollIntoView({
                behavior:"smooth"
            });

        });

        categoryMenu.appendChild(li);

    });

}

/* =====================================================
   QUESTION RENDERING
===================================================== */

function renderQuestions(){

    questionsContainer.innerHTML = "";

    const categories =
    Object.keys(data);

    if(categories.length === 0){

        questionsContainer.innerHTML = `
            <div class="empty-message">
                Waiting for Question Chunks...
            </div>
        `;

        return;
    }

    categories.forEach(category => {

        const section =
        document.createElement("section");

        section.className =
        "category";

        section.id =
        generateId(category);

        const totalQuestions =
        data[category].length;

        let html = `

            <h2 class="category-title">

                ${category}

                <span style="
                    font-size:16px;
                    color:#777;
                    font-weight:normal;
                ">
                    (${totalQuestions} Questions)
                </span>

            </h2>

        `;

        data[category].forEach((item,index)=>{

            html += `

                <div class="question">

                    <div class="question-title">

                        <span class="question-number">
                            Q${index + 1}.
                        </span>

                        ${item.question}

                    </div>

                    <div class="answer">

                        <p>
                            ${item.answer}
                        </p>

                        ${
                            item.code
                            ?
                            `
                            <div class="code-container">

                                <button
                                    class="copy-btn"
                                    onclick="copyCode(this)">
                                    Copy
                                </button>

                                <div class="code-header">
                                    JAVA
                                </div>

                                <pre class="code-block"><code>${escapeHtml(item.code)}</code></pre>

                            </div>
                            `
                            :
                            ""
                        }

                    </div>

                </div>

            `;

        });

        section.innerHTML = html;

        questionsContainer
        .appendChild(section);

    });

    attachAccordionEvents();

    updateSidebarHighlight();
}

/* =====================================================
   ACCORDION
===================================================== */

function attachAccordionEvents(){

    document
    .querySelectorAll(".question-title")
    .forEach(questionTitle => {

        questionTitle
        .addEventListener("click", () => {

            const question =
            questionTitle.parentElement;

            question
            .classList
            .toggle("active");

        });

    });

}

/* =====================================================
   SEARCH
===================================================== */

function initializeSearch(){

    searchBox.addEventListener(
        "input",
        function(){

            const keyword =
            this.value
                .trim()
                .toLowerCase();

            document
            .querySelectorAll(".question")
            .forEach(question => {

                const content =
                question.textContent
                        .toLowerCase();

                question.style.display =
                content.includes(keyword)
                ? "block"
                : "none";

            });

        }
    );

}

/* =====================================================
   ACTIVE CATEGORY HIGHLIGHT
===================================================== */

let sectionObserver = null;

function updateSidebarHighlight(){

    const sections =
    document.querySelectorAll(".category");

    const navItems =
    document.querySelectorAll(
        "#categoryMenu li"
    );

    if(sections.length === 0){
        return;
    }

    if(sectionObserver){
        sectionObserver.disconnect();
    }

    sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    navItems
                    .forEach(item => {

                        item.classList
                        .remove("active");

                    });

                    const current =
                    document.querySelector(
                        `[data-target="${entry.target.id}"]`
                    );

                    if(current){

                        current.classList
                        .add("active");

                    }

                }

            });

        },

        {
            threshold:0.2
        }

    );

    sections.forEach(section => {

        sectionObserver.observe(section);

    });

}

/* =====================================================
   STATS UPDATE
===================================================== */

function updateStats(){

    let totalQuestions = 0;

    Object.values(data)
    .forEach(category => {

        totalQuestions +=
        category.length;

    });

    const statCards =
    document.querySelectorAll(
        ".stat-card h3"
    );

    if(statCards.length > 0){

        statCards[0].textContent =
        totalQuestions + "+";
    }

}

/* =====================================================
   APPLICATION START
===================================================== */

function initializeApplication(){

    buildSidebar();

    renderQuestions();

    initializeSearch();

    updateStats();

}

/* =====================================================
   WAIT FOR ALL QUESTION FILES
===================================================== */

window.addEventListener(
    "load",
    initializeApplication
);