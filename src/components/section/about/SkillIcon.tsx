interface Props {
  skill: string;
}

const SkillIcon = ({ skill }: Props) => {
  switch (skill) {
    case "react":
      return <i className="devicon-react-original colored text-4xl"></i>;
    case "typescript":
      return <i className="devicon-typescript-plain colored text-4xl"></i>;
    case "nextjs":
      return <i className="devicon-nextjs-plain text-4xl"></i>;
    case "nodejs":
      return <i className="devicon-nodejs-plain colored text-4xl"></i>;
    case "python":
      return <i className="devicon-python-plain colored text-4xl"></i>;
    case "java":
      return <i className="devicon-java-plain colored text-4xl"></i>;
    case "laravel":
      return <i className="devicon-laravel-original colored text-4xl"></i>;
    case "aws":
      return (
        <i className="devicon-amazonwebservices-plain-wordmark text-4xl"></i>
      );
    case "vscode":
      return <i className="devicon-vscode-plain colored text-4xl"></i>;
    case "git":
      return <i className="devicon-git-plain colored text-4xl"></i>;
    case "mysql":
      return <i className="devicon-mysql-original colored text-4xl"></i>;
    case "postgresql":
      return <i className="devicon-postgresql-plain colored text-4xl"></i>;
    default:
      break;
  }
};

export default SkillIcon;
