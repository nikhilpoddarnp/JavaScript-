const insert = document.getElementById('insert')
window.addEventListener("keydown" , function(e) {
    insert.innerHTML = `
    <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}  </td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>`
})