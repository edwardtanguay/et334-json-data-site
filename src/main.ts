import employees from './data/employees.json';
import './style.css'

employees.sort((a, b) => a.lastName > b.lastName ? 1 : -1);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>JSON Site</h1>
<p>There are ${employees.length} employees.</p>
<ul>
  ${employees.map(employee => {
  return `<li>ID=${employee.employeeID} - ${employee.firstName} <strong>${employee.lastName}</strong> - ${employee.address.city}
   <ul>
    <li>reports to: <span style="color: red">${getReportsToName(employee)}</span></li>
   </ul>
    </li>`
}).join('')}
</ul>
`

function getReportsToName(employee) {
  console.log(employee.reportsTo);
  if (employee.reportsTo !== 'NULL') {
    return 'nnn'; // employees.find(m => m.employeeID === employee.reportsTo).firstName
  } else {
    return 'nobody';
  }
}
