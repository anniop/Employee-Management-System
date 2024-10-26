const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Complete the project setup",
        "taskDate": "2024-10-26",
        "category": "Setup",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Develop login feature",
        "taskDate": "2024-10-27",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 3",
        "description": "Code review session",
        "taskDate": "2024-10-28",
        "category": "Review",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Write documentation",
        "taskDate": "2024-10-26",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Fix bug in payment gateway",
        "taskDate": "2024-10-27",
        "category": "Bug Fix",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Update server dependencies",
        "taskDate": "2024-10-26",
        "category": "Maintenance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Design new user interface",
        "taskDate": "2024-10-27",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Task 3",
        "description": "Backend API integration",
        "taskDate": "2024-10-28",
        "category": "Integration",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Prepare presentation",
        "taskDate": "2024-10-26",
        "category": "Preparation",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Database schema update",
        "taskDate": "2024-10-27",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 3",
        "description": "Optimize code performance",
        "taskDate": "2024-10-28",
        "category": "Optimization",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Task 1",
        "description": "Conduct user interviews",
        "taskDate": "2024-10-26",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Task 2",
        "description": "Compile feedback report",
        "taskDate": "2024-10-27",
        "category": "Analysis",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  }
]

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]


export const setLocalStroage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStroage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  console.log(admin, employees)
}


