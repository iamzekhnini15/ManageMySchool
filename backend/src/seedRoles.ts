import { AppDataSource } from "./config/data-sources";
import { Role } from "./models/User_role"

export async function seedRoles() {
    const roleRepository = AppDataSource.getRepository(Role);

    const rolesWithPermissions = [
        {
            name: 'student',
            permissions: {
                viewGrades: true,
                submitAssignments: true
            }
        },
        {
            name: 'teacher',
            permissions: {
                createCourses: true,
                gradeAssignments: true,
                viewStudentInfo: true
            }
        },
        {
            name: 'admin',
            permissions: {
                manageUsers: true,
                manageRoles: true,
                manageSystem: true
            }
        }
    ];

    for (const roleData of rolesWithPermissions) {
        const existingRole = await roleRepository.findOne({ where: { role_name: roleData.name } });
        if (!existingRole) {
            const role = new Role();
            role.role_name = roleData.name;
            role.permissions = roleData.permissions;
            await roleRepository.save(role);
            console.log(`Role ${roleData.name} created with permissions`);
        }
    }
}