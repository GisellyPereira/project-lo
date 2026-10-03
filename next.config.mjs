const nextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/blog/plano-alimentar-sustentavel",
        destination: "/blog/rotina-sem-complicar",
        permanent: true,
      },
      {
        source: "/blog/alimentos-nutritivos",
        destination: "/blog/mesa-com-mais-cores",
        permanent: true,
      },
      {
        source: "/blog/mindset-emagrecimento",
        destination: "/blog/comer-com-presenca",
        permanent: true,
      },
      {
        source: "/blog/nutricao-performance-esportiva",
        destination: "/blog/rotina-sem-complicar",
        permanent: true,
      },
      {
        source: "/blog/organizar-semana-alimentar",
        destination: "/blog/rotina-sem-complicar",
        permanent: true,
      },
      {
        source: "/blog/intolerancias-alimentares",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
