package io.nology.employee_backend.approvalKeys;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ApprovalKeyRepository extends JpaRepository<ApprovalKeyItem, Long> {

}
