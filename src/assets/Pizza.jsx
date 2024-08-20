/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 .\public\models\Pizza.glb 
*/

import React from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export function Pizza(props) {
  const { scene } = useGLTF("./models/Pizza.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Root} />
      <skinnedMesh
        geometry={nodes.Cheese.geometry}
        material={materials.Cheese}
        skeleton={nodes.Cheese.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Doe.geometry}
        material={materials.Doe}
        skeleton={nodes.Doe.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Edge.geometry}
        material={materials.Doe}
        skeleton={nodes.Edge.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Pepperoni001.geometry}
        material={materials.Pepperoni}
        skeleton={nodes.Pepperoni001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Pepperoni002.geometry}
        material={materials.Pepperoni}
        skeleton={nodes.Pepperoni002.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Pepperoni003.geometry}
        material={materials.Pepperoni}
        skeleton={nodes.Pepperoni003.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Pepperoni004.geometry}
        material={materials.Pepperoni}
        skeleton={nodes.Pepperoni004.skeleton}
      />
    </group>
  );
}

useGLTF.preload("./models/Pizza.glb");
