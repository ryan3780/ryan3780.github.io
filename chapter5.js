export function example5() {
  console.log("chapter5.js");
  const rr = document.getElementById("root");
  rr.style.visibility = "hidden";
  rr.innerText = `hell???`;
  rr.style.textAlign = "center";
  rr.style.marginTop = "10px";
  ren();
}

export const userList = [
  {
    name: "KIM",
    id: "20190002",
    englishScore: 90,
    historyScore: 50,
    KorHistoryScore: 70
  },

  {
    name: "KANG",
    id: "20190005",
    englishScore: 100,
    historyScore: 100,
    KorHistoryScore: 100
  },
  {
    name: "PARK",
    id: "20190001",
    englishScore: 20,
    historyScore: 30,
    KorHistoryScore: 40
  },
  {
    name: "HONG",
    id: "20190003",
    englishScore: 30,
    historyScore: 70,
    KorHistoryScore: 80
  },
  {
    name: "NA",
    id: "20190004",
    englishScore: 80,
    historyScore: 90,
    KorHistoryScore: 50
  }
];

export function compareId(a, b) {
  return a.id - b.id;
}

export function sortId(list) {
  let b = list.sort(compareId);
  return b;
}

// console.log(studentsList());

export const makeListToTable = list =>
  list.map(
    (elm, index) => `<tr> 
    <td>${index + 1}</td>
    <td>${elm.name}</td>
    <td>${elm.id}</td>
    <td>${elm.englishScore}</td>
    <td>${elm.historyScore}</td>
    <td>${elm.KorHistoryScore}</td>
    <td><button class="btn btn-danger" onclick=index.deleteUser(${index})>삭제</button></td>
    </tr>`
  );

export function deleteUser(index) {
  userList.splice(index, 1);
  ren();
}

export function render(table) {
  document.getElementById("test").innerHTML = table.join("");
}

// 해당 함수가 학생 리스트를 불러 옵니다.
export function ren() {
  sortId(userList);
  render(makeListToTable(userList));
}
