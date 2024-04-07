package io.nology.employee_backend.approvedUsers;

import org.springframework.data.jpa.repository.JpaRepository;



public interface ApprovedUserRepository extends JpaRepository<ApprovedUserItem, Long> {

}
