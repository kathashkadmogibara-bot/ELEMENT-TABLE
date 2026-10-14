const elements = [
  ["হাইড্ৰজেন", "H", 1, 1, 1, "1", 1, 1],
  ["হিলিয়াম", "He", 2, 2, 2, "2", 2, 0],
  ["লিথিয়াম", "Li", 3, 3, 3, "2,1", 1, 1],
  ["বেৰিলিয়াম", "Be", 4, 4, 4, "2,2", 2, 2],
  ["বৰণ", "B", 5, 5, 5, "2,3", 3, 3],
  ["কাৰ্বন", "C", 6, 6, 6, "2,4", 4, 4],
  ["নাইট্ৰজেন", "N", 7, 7, 7, "2,5", 5, 3],
  ["অক্সিজেন", "O", 8, 8, 8, "2,6", 6, 2],
  ["ফ্লুৰিন", "F", 9, 9, 9, "2,7", 7, 1],
  ["নিয়ন", "Ne", 10, 10, 10, "2,8", 8, 0],
  ["ছডিয়াম", "Na", 11, 11, 11, "2,8,1", 1, 1],
  ["মেগনেছিয়াম", "Mg", 12, 12, 12, "2,8,2", 2, 2],
  ["এলুমিনিয়াম", "Al", 13, 13, 13, "2,8,3", 3, 3],
  ["ছিলিকন", "Si", 14, 14, 14, "2,8,4", 4, 4],
  ["ফছফৰাছ", "P", 15, 15, 15, "2,8,5", 5, 3],
  ["ছালফাৰ", "S", 16, 16, 16, "2,8,6", 6, 2],
  ["ক্লোৰিন", "Cl", 17, 17, 17, "2,8,7", 7, 1],
  ["আৰ্গন", "Ar", 18, 18, 18, "2,8,8", 8, 0],
  ["পটাছিয়াম", "K", 19, 19, 19, "2,8,8,1", 1, 1],
  ["কেলছিয়াম", "Ca", 20, 20, 20, "2,8,8,2", 2, 2]
];

const tbody = document.querySelector("tbody");

elements.forEach(([name, symbol, atomicNo, protons, electrons, config, valenceE, valency]) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${symbol}</td>
    <td>${atomicNo}</td>
    <td><input type="text" value="${protons}"></td>
    <td><input type="text" value="${electrons}"></td>
    <td><input type="text" value="${config}"></td>
    <td><input type="text" value="${valenceE}"></td>
    <td><input type="text" value="${valency}"></td>
    <td><input type="text"></td>
  `;
  tbody.appendChild(row);
});
