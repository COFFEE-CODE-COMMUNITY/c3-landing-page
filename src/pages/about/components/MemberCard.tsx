interface MemberCardProps {
  image: string;
  name: string;
}

const MemberCard = ({ image, name }: MemberCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="h=40 w-40 rounded-full object-center"
      />
      <h3 className="text-h5">{name}</h3>
    </div>
  );
};

export default MemberCard;
