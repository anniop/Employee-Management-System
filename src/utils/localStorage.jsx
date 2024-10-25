const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Prepare Sales Report",
        "description": "Compile and summarize Q3 sales data.",
        "date": "2024-10-20",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Update Client Database",
        "description": "Add new client data from recent surveys.",
        "date": "2024-10-22",
        "category": "Data Entry"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Team Meeting Preparation",
        "description": "Organize the agenda and notes for the team meeting.",
        "date": "2024-10-21",
        "category": "Management"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Design Mockups",
        "description": "Create mockups for the new homepage layout.",
        "date": "2024-10-23",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Review PRs",
        "description": "Review pull requests for the latest feature branch.",
        "date": "2024-10-20",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Product Demo",
        "description": "Prepare for the product demo with the marketing team.",
        "date": "2024-10-24",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Finalize Annual Budget",
        "description": "Complete the annual budget before the finance review.",
        "date": "2024-10-19",
        "category": "Finance"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Update Backend API",
        "description": "Optimize the backend API for faster response times.",
        "date": "2024-10-22",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Client Feedback Collection",
        "description": "Gather feedback from top clients about the new update.",
        "date": "2024-10-23",
        "category": "Client Relations"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Security Review",
        "description": "Review recent security patches and apply updates.",
        "date": "2024-10-21",
        "category": "IT"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Marketing Strategy",
        "description": "Draft Q4 digital marketing strategy document.",
        "date": "2024-10-25",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Supplier Contract Review",
        "description": "Review and finalize the new supplier contracts.",
        "date": "2024-10-18",
        "category": "Procurement"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Onboarding New Hires",
        "description": "Guide the new hires through the onboarding process.",
        "date": "2024-10-26",
        "category": "HR"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Organize Workshop",
        "description": "Arrange materials and agenda for the workshop.",
        "date": "2024-10-29",
        "category": "Training"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Customer Issue Resolution",
        "description": "Address and resolve a major issue for a key client.",
        "date": "2024-10-24",
        "category": "Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Website Analytics",
        "description": "Analyze traffic data for the latest website update.",
        "date": "2024-10-20",
        "category": "Analytics"
      }
    ]
  }
];

const admin = {
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
};

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {

  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  console.log(employees, admin)
}
