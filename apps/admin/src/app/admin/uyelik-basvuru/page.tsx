"use client";

import { List, DateField } from "@refinedev/mantine";
import { Table, Badge, Text } from "@mantine/core";
import { useTable } from "@refinedev/core";

export default function UyelikBasvuruList() {
  const {
    tableQuery: { data, isPending },
  } = useTable({
    resource: "uyelik-basvuru",
  });

  const rows = data?.data?.map((item: any) => (
    <Table.Tr key={item.id}>
      <Table.Td>
        <Text size="sm" fw={500}>{item.ad} {item.soyad}</Text>
      </Table.Td>
      <Table.Td>{item.meslek}</Table.Td>
      <Table.Td>{item.eposta}</Table.Td>
      <Table.Td>
        <Badge 
          color={item.durum === "ONAYLANDI" ? "green" : item.durum === "REDDEDİLDİ" ? "red" : "blue"}
          variant="light"
        >
          {item.durum}
        </Badge>
      </Table.Td>
      <Table.Td>
        <DateField value={item.createdAt} format="DD.MM.YYYY HH:mm" />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <List resource="uyelik-basvuru">
      <Table verticalSpacing="sm" highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Ad Soyad</Table.Th>
            <Table.Th>Meslek</Table.Th>
            <Table.Th>E-posta</Table.Th>
            <Table.Th>Durum</Table.Th>
            <Table.Th>Tarih</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </List>
  );
}

