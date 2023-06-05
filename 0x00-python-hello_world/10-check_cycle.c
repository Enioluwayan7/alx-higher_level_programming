#include "lists.h"

/**
 * check_cycle - checks if a singly linked list has a cycle in it.
 * @list: single linked lists to check.
 *
 * Return: 1(success) There is cycle, 0(fails), no cycle
 */
int check_cycle(listint_t *list)
{
	listint_t *no_cycle = list;
	listint_t *cycle = list;

	if (!list)
		return (0);
	while (no_cycle && cycle && cycle -> next)
	{
		no_cycle = no_cycle -> next;
		cycle = cycle -> next -> next;
		if (no_cycle == cycle)
			return(1);
	}
	return (0);
}
