
const Api="https://phi-lab-server.vercel.app/api/v1/lab/issues"

let issuesData=[]



function login(){

const user=document.getElementById("username").value
const pass=document.getElementById("password").value

if(user==="admin" && pass==="admin123"){

document.getElementById("loginPage").classList.add("hidden")
document.getElementById("mainPage").classList.remove("hidden")

loadIssues()

}else{

alert("Wrong credentials")

}

}



async function loadIssues(){

document.getElementById("loading").classList.remove("hidden")

const res=await fetch(Api)
const data=await res.json()

issuesData=data.data

document.getElementById("issueCount").innerText =
issuesData.length + " Issues"

displayIssues(issuesData)

document.getElementById("loading").classList.add("hidden")

}



function displayIssues(issues){

const container=document.getElementById("issuesContainer")

container.innerHTML=""

issues.forEach(issue=>{

const borderColor =
issue.status==="open"
? "border-green-400"
: "border-purple-400"

let priorityColor="badge"

if(issue.priority==="HIGH") priorityColor="badge badge-error "
if(issue.priority==="MEDIUM") priorityColor="badge badge-warning"
if(issue.priority==="LOW") priorityColor="badge badge-ghost"

const card=`

<div onclick="openModal(${issue.id})"
class="card bg-[#ffffff] shadow hover:shadow-lg border-t-4 ${borderColor} cursor-pointer">

<div class="card-body p-4">

<div class="flex justify-between">

<span class="text-xs text-gray-500">
${issue.id}
</span>

<span class="${priorityColor}">
${issue.priority}
</span>

</div>

<h2 class="font-semibold text-sm mt-1">
${issue.title}
</h2>

<p class="text-xs text-gray-500 line-clamp-2">
${issue.description}
</p>


<div class="flex gap-2 mt-2">

<div class="badge badge-outline badge-error items-center">
<p><img src="./asets/BugDroid.png" alt=""><p/><span>BUG<span/>
</div>

<span class="badge badge-outline badge-warning ">
<i class="fa-solid fa-life-ring"></i> HELP WANTED
</span>

</div>


<div class="text-xs text-gray-400 mt-3">

<p>By ${issue.author}</p>

<p>${issue.createdAt}</p>

</div>

</div>

</div>
`

container.innerHTML+=card

})

}



function filterTab(type,el){

document.querySelectorAll(".tab")
.forEach(tab=>tab.classList.remove("tab-active"))

el.classList.add("tab-active")

if(type==="all"){

displayIssues(issuesData)

document.getElementById("issueCount").innerText =
issuesData.length+" Issues"

}else{

const filtered =
issuesData.filter(isu=>isu.status===type)

displayIssues(filtered)

document.getElementById("issueCount").innerText =
filtered.length+" Issues"

}

}



async function openModal(id){

const res=await fetch(
`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
)

const data=await res.json()

const issue=data.data

document.getElementById("modalTitle").innerText=issue.title
document.getElementById("modalDesc").innerText=issue.description

document.getElementById("modalInfo").innerHTML=`


<div class="flex gap-2 mb-2">

<span class="badge badge-success">
${issue.status}
</span>

<span class="text-xs text-gray-500">
Opened by ${issue.author}
</span>

</div>

<div class="flex  gap-2 mt-3">

<div class="badge badge-outline badge-error items-center">
<p><img src="./asets/BugDroid.png" alt=""><p/><span>BUG<span/>
</div>

<span class="badge badge-outline badge-warning ">
<i class="fa-solid fa-life-ring"></i> HELP WANTED
</span>

</div>

<div class="bg-[#F8FAFC] flex  p-3 rounded mt-4 text-sm">

<div class="ml-2"><p><h4 class="font-bold">Assignee:</h4>${issue.author}</p></div>

<div class="mt-1 ml-32">
<h4 class="font-bold">Priority:</h4>
<span class="badge badge-error">${issue.priority}
</span>

</div>

</div>

`

document.getElementById("issueModal").showModal()

}



async function searchIssue(){

const text=document.getElementById("searchInput").value

if(!text) return loadIssues()

const res=await fetch(
`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`
)

const data=await res.json()

displayIssues(data.data)

document.getElementById("issueCount").innerText =
data.data.length + " Issues"

}

