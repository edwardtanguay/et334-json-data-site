import employees from './data/employees.json';
import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>JSON Site</h1>
<p>There are ${employees.length} employees.</p>
<ul>
  ${employees.map(employee => {
    return `<li>${employee.firstName} <strong>${employee.lastName}</strong> - ${employee.address.city}</li>`
  }).join('')}
</ul>
`