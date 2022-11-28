var issueNum = 0;
var timelineIssueNum = 0;
var upvotes = [0];
function popup(){
    if(document.getElementById('newIssuePopUp').style.visibility=="hidden"){
        document.getElementById('newIssuePopUp').style.visibility="visible"
    }else{
        document.getElementById('newIssuePopUp').style.visibility="hidden"
    }
}

function subIssue(){
    if(issueDesc.value.length==0){
        window.alert("please fill the issue description");
    }else{
        const issueSite = document.getElementById('issueSite')
        const issueCat = document.getElementById('issueCat')
        const issueDesc = document.getElementById('issueDesc')
        const leftCont = document.getElementById('leftCont')
        const newDiv = document.createElement("div");
        issueNum++;
        newDiv.className = "bg-dark rounded mb-2 h-50 w-100";
        newDiv.id = "upvoteBtn" + issueNum;
        newDiv.style = "color: white; padding: 10px";
        newDiv.innerText = "Issue site: " + issueSite.value +"\n\nIssue Category: " + issueCat.value+"\n\nIssue Description: " + issueDesc.value + "\n\n";
        newDiv.innerHTML += "<button onclick=\"upvote(event)\">upvote (0)</button>"
        // newDiv.innerHTML += "<button>upvote (0)</button>"
        leftCont.appendChild(newDiv)
        document.getElementById('newIssuePopUp').style.visibility="hidden";
    }
}

// function upvote(){
//     const leftCont = document.getElementById('leftCont')
//     leftCont.addEventListener("click", function (event){
//         let clicked = 0;
//         console.log("hi1")
//         const clkDiv = event.target;
//         clicked = 1;
//         if(clicked){
//             console.log(clkDiv)
//             votes++;
//         }
//         document.getElementById(clkDiv.id).querySelector("button").innerText =  votes;
//         console.log("hi2")
//     })
// }

// function upvote(){
//     const leftCont = document.getElementById("leftCont")
//     issueList = leftCont.querySelectorAll("div");
//     // let index = issueList.indexOf(this);
//     // let thisid = 
//     console.log(issueList[1].id);
//     // console.log(thisid)
// }

// function getEvent(event){
//     var clickedEleID = event.target.id;
//     console.log(clickedEleID);
// }

function upvote(event){
    const leftCont = document.getElementById("leftCont")
    issueList = leftCont.querySelectorAll("div");
    
    let i=0;
    // while(("upvoteBtn"+i)!=event.target.id){
    //     i++;
    // }

    // console.log(issueList[i].id);
    var abcds = event.target.id
    console.log(abcds);
    console.log("upvoteBtn"+i);

    while(abcds != "upvoteBtn"+i){
        i++;
    }

    if(abcds == "upvoteBtn"+i){
        console.log("yes")
    }

    upvotes[i]++;
    if(upvotes[i]>=5){
        updateTimeline(issueList, i)
    }else{
        issueList[i].getElementsByTagName("button")[0].innerText = "upvote ("+upvotes[i]+")";
    }

}

function updateTimeline(issueList, i){
    issueList[i].remove();
    const rightCont = document.getElementById('rightCont')
    const newTimelineDiv = document.createElement("div");
    issueNum++;
    newTimelineDiv.className = "bg-dark rounded mb-2 h-50 w-100";
    newTimelineDiv.id = "upvoteBtn" + issueNum;
    newTimelineDiv.style = "color: white; padding: 10px";
    newTimelineDiv.innerText = "Issue site: " + issueSite.value +"\n\nIssue Category: " + issueCat.value+"\n\nIssue Description: " + issueDesc.value + "\n\n";
    // newTimelineDiv.innerHTML += "<button onclick=\"upvote(event)\">upvote (0)</button>"
    // newDiv.innerHTML += "<button>upvote (0)</button>"
    rightCont.appendChild(newTimelineDiv )
}

