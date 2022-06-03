output "new_vpc_id" {
  value = aws_vpc.new.id
}

output "private_subnet_id" {
  value = aws_subnet.private.id
}

output "private_subnet_cidr" {
  value = local.private_subnet_cidr
}
