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
   SIDEBAR
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

                No Questions Loaded

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

        let html = `

            <h2 class="category-title">

                ${category}

                <span style="
                    font-size:16px;
                    color:#777;
                    font-weight:normal;
                ">

                    (${data[category].length} Questions)

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

                        <div class="answer-section">

                            <h4>
                                Detailed Answer
                            </h4>

                            <p>
                                ${
                                    (item.answer || "")
                                    .replace(/\n/g,"<br>")
                                }
                            </p>

                        </div>

                        ${
                            item.example
                            ?
                            `

                            <div class="answer-section">

                                <h4>
                                    Real World Example
                                </h4>

                                <p>
                                    ${
                                        item.example
                                        .replace(/\n/g,"<br>")
                                    }
                                </p>

                            </div>

                            `
                            :
                            ""
                        }

                        ${
                            item.followups &&
                            item.followups.length > 0
                            ?
                            `

                            <div class="answer-section">

                                <h4>
                                    Follow-up Questions
                                </h4>

                                <ul class="followup-list">

                                    ${
                                        item.followups
                                            .map(
                                                question =>
                                                `
                                                <li>
                                                    ${question}
                                                </li>
                                                `
                                            )
                                            .join("")
                                    }

                                </ul>

                            </div>

                            `
                            :
                            ""
                        }

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

                                    CODE

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

    initializeSectionObserver();
}

/* =====================================================
   ACCORDION
===================================================== */

function attachAccordionEvents(){

    document
    .querySelectorAll(".question-title")
    .forEach(title => {

        title.addEventListener(
            "click",
            () => {

                title
                .parentElement
                .classList
                .toggle("active");

            }
        );

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
   CATEGORY HIGHLIGHT
===================================================== */

let observer = null;

function initializeSectionObserver(){

    const sections =
    document.querySelectorAll(
        ".category"
    );

    const navItems =
    document.querySelectorAll(
        "#categoryMenu li"
    );

    if(observer){

        observer.disconnect();
    }

    observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    navItems.forEach(item => {

                        item.classList
                            .remove("active");

                    });

                    const activeItem =
                    document.querySelector(

                        `[data-target="${entry.target.id}"]`

                    );

                    if(activeItem){

                        activeItem
                            .classList
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

        observer.observe(section);

    });

}

/* =====================================================
   STATS
===================================================== */

function updateStats(){

    let totalQuestions = 0;

    Object.values(data)
          .forEach(category => {

        totalQuestions +=
        category.length;

    });

    const cards =
    document.querySelectorAll(
        ".stat-card h3"
    );

    if(cards.length > 0){

        cards[0].textContent =
        totalQuestions + "+";
    }

}

/* =====================================================
   APPLICATION INIT
===================================================== */

function initializeApplication(){

    buildSidebar();

    renderQuestions();

    initializeSearch();

    updateStats();

}

/* =====================================================
   START
===================================================== */

window.addEventListener(
    "load",
    initializeApplication
);