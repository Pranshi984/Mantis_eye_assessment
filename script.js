// Sample data (replace this with your actual data)
const employees = [
    { fullName: "Alice Anderson", designation: "Founder", manager: null },
    // Add more employees here
  ];
  
  // Create nodes from the employee data
  function createNodes(employees, manager = null) {
    const nodes = [];
    for (const employee of employees) {
      if (employee.manager === manager) {
        const node = document.createElement("div");
        node.className = "node";
        node.id = employee.fullName.toLowerCase().replace(" ", "-");
        node.innerHTML = `
          <div class="name">${employee.fullName}</div>
          <div class="designation">${employee.designation}</div>
        `;
        nodes.push(node);
        const childNodes = createNodes(employees, employee.fullName);
        if (childNodes.length > 0) {
          const childContainer = document.createElement("div");
          childContainer.className = "child-container";
          childNodes.forEach(childNode => childContainer.appendChild(childNode));
          node.appendChild(childContainer);
        }
      }
    }
    return nodes;
  }
  
  // Add nodes to the organizational chart
  function addToChart(nodes) {
    const orgChart = document.querySelector(".org-chart");
    nodes.forEach(node => orgChart.appendChild(node));
  }
  
  // Initialize the organizational chart
  document.addEventListener("DOMContentLoaded", () => {
    const nodes = createNodes(employees);
    addToChart(nodes);
  });
  