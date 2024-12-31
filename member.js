function skillsMember() {   
  return {
    name: 'skillsMember', // name of the function   
    type: 'member', // type of the function
    description: 'Get the skills of a member', // description of the function
    args: { // arguments of the function
      member: {
        type: 'Member',
        description: 'The member to get the skills of'
      }
        },
        resolve: (parent, { member }, context) => {
        return context.prisma.member({ id: member.id }).skills();
        }
      };
    }