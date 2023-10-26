---
sidebar_position: 5
---

# How to request access on GLiCID Cluster?

    1. Create an account on https://clam.glicid.fr (school account, or CRU account for external users).
    2. Account validation by an administrator
    3. User sends SSH key to CLAM portal (in profile's SSH Access tab).
    4. SSH connection configuration (found in the profile's SSH Access tab):
        - For Linux and MacOS, edit the .ssh/config file and add the following:

	Host Bastion
		Hostname bastion.glicid.fr
		User <username>@ec-nantes.fr
		IdentityFile ~/.ssh/id_rsa
		ForwardAgent yes

	Host glicid
		Hostname login-001.glicid.fr
		User <username>@ec-nantes.fr
		ProxyJump Bastion
		IdentityFile ~/.ssh/id_rsa

	Host nautilus
		Hostname nautilus-devel-001.nautilus.intra.glicid.fr
		User jmir@ec-nantes.fr
		ProxyJump glicid
		IdentityFile ~/.ssh/id_rsa


        - For Windows, use MobaXTerm. With this tool, you can easily configure the GLiCID host, as well as the Jump proxy to Bastion.

    5. You can log in using the session created in MobaXTerm (Windows), or with the GLiCID ssh command from a terminal (Linux and MacOS).

Note: Avoid using passwords on the GLiCID platform.

After, logging in you need to generate the key and copy it to authorized keys directory.

```
login@guix-devel-00X# ssh-keygen -t rsa
login@guix-devel-00X# cat .ssh/id_rsa.pub > .ssh/authorized_keys
```
    
    
